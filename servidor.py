from flask import Flask, request, jsonify, render_template
import numpy as np
import requests
#Extracción de datos
import pandas as pd
from sklearn.model_selection import train_test_split
from joblib import load,dump
from sklearn.tree import DecisionTreeClassifier


#cargar el modelo
dt = load('modelo.joblib')

#Generar el servidor
servidorWeb = Flask(__name__)

@servidorWeb.route('/formulario', methods=['GET'])
def form():
    return render_template('pagina.html')

@servidorWeb.route('/modeloForm', methods = ['POST'])
def model():
    #Procesar datos de la entrada
    contenido = request.form
    print (contenido)
    datosEntrada = np.array([
        contenido['Pregnancies'],
        contenido['Glucose'],
        contenido['BloodPressure'],
        contenido['SkinThickness'],
        contenido['Insulin'],
        contenido['BMI'],
        contenido['DiabetesPedigreeFunction'],
        contenido['Age']
        ])
    #actualizar el modelo
    resultado = dt.predict(datosEntrada.reshape(1,-1))


    # ECHAR A ANDAR EL POST
    API_ENDPOINT = "http://localhost:8080/consola/altaDiabetes"
    # data to be sent to api
    data = {'pregnancies':contenido['Pregnancies'],
            'glucose':contenido['Glucose'],
            'bloodpressure':contenido['BloodPressure'],
            'skinthickness':contenido['SkinThickness'],
            'insulin':contenido['Insulin'],
            'bmi':contenido['BMI'],
            'diabetespedigreefunction':contenido['DiabetesPedigreeFunction'],
            'age':contenido['Age']
            }

    # sending post request and saving response as response object
    r = requests.post(url = API_ENDPOINT, data = data)

    #Regresar la salida del modelo
    #return jsonify({"Resultado":str(resultado[0])})

    ## APPEND AL CSV 
    data = {
        'Pregnancies': contenido['Pregnancies'],
        'Glucose': contenido['Glucose'],
        'BloodPressure': contenido['BloodPressure'],
        'SkinThickness': contenido['SkinThickness'],
        'Insulin': contenido['Insulin'],
        'BMI': contenido['BMI'],
        'DiabetesPedigreeFunction': contenido['DiabetesPedigreeFunction'],
        'Age': contenido['Age'],
        'Outcome': resultado
    }
    # Make data frame of above data
    df = pd.DataFrame(data)
    
    # append data frame to CSV file
    df.to_csv('diabetes.csv', mode='a', index=False, header=False)

    #Regresar la salida del modelo
    return jsonify({"Resultado":str(resultado[0])})


@servidorWeb.route('/modeloFile', methods = ['POST'])
def train():
    #Procesar datos de la entrada
    dataFrame = pd.read_csv("diabetes.csv")
    dataFrame['Outcome'] = dataFrame['Outcome'].replace(['0','1'],['Not detected','Detected'])
    X = dataFrame.drop('Outcome', axis=1)
    y = dataFrame['Outcome']
    X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2)
    #modelo
    dt = DecisionTreeClassifier()
    #entrenar modelo
    dt.fit(X_train,y_train)
    #evaluación del modelo
    #print("Exactitud de desempeño: ", dt.score(X_test,y_test)) #accuracy
    #exportar modelo para servidor web con flask
    dump(dt,'modelo.joblib') #64bits
    
    #recargar el modelo
    dt = load('modelo.joblib')
    return jsonify({"Re entrenado, exactitud de desempeno: ":str(dt.score(X_test,y_test))})


if __name__ == '__main__':
    servidorWeb.run(debug=False, host = '0.0.0.0', port='8081')
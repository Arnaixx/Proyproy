#Extracción de datos
import pandas as pd
#manejo de vectores y matrices
import numpy as np
#exportar procesos de ML
from joblib import load,dump


dataFrame = pd.read_csv("diabetes.csv")
dataFrame.head()


dataFrame['Outcome'] = dataFrame['Outcome'].replace([0,1],['Not detected','Detected'])
dataFrame.head()


#caracteristicas de entrada
#matriz
X = dataFrame.drop('Outcome', axis=1)
#características de salida
#vector
y = dataFrame['Outcome']

#separar base de datos en dos conjuntos
from sklearn.model_selection import train_test_split

X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2)




#modelo
from sklearn.tree import DecisionTreeClassifier

dt = DecisionTreeClassifier()

#entrenar modelo
dt.fit(X_train,y_train)

#evaluación del modelo
print("Exactitud de desempeño: ", dt.score(X_test,y_test)) #accuracy





#exportar modelo para servidor web con flask
dump(dt,'modelo.joblib') #64bits


print(x_test.iloc[0])
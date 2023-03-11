from flask import Blueprint
import random
import math

clustering_api = Blueprint('clustering',__name__)

import pandas as pd

from flask_jsonpify import jsonpify

@clustering_api.route('/clustering_generator/', methods=['GET'])
def getClustering():
    # Variables
    numClasses = 3
    rangeClasses = 1000
    rangeInstances = 150
    numInstancesPerClass = 50


    datapointsX = []
    datapointsY = []

    classCentersPresentation = [(600,250), (200,650), (800,800)]

    for i in range(numClasses):
        classCenterX = random.randint(0,rangeClasses)
        classCenterY = random.randint(0,rangeClasses)

        # FOR PRESENTATION
        classCenterX = classCentersPresentation[i][0]
        classCenterY = classCentersPresentation[i][1]

        for _ in range(random.randint(numInstancesPerClass*2//3,numInstancesPerClass)):
            R = rangeInstances
            theta = random.uniform(0,2*math.pi)
            r = random.uniform(0,R)
            datapointsX.append(classCenterX + math.sqrt(r*R)*math.cos(theta))
            datapointsY.append(classCenterY + math.sqrt(r*R)*math.sin(theta))

    dict = {'x':datapointsX, 'y':datapointsY}
    df = pd.DataFrame(dict)
    df_list = df.values.tolist()
    JSONP_data = jsonpify(df_list)
    return JSONP_data
from flask import Blueprint, request

regression_api = Blueprint('regression',__name__)

import pandas as pd
import numpy as np

from flask_jsonpify import jsonpify

@regression_api.route('/regression_generator/', methods=['GET'])
def regression_generator():
    # Variables
    n_samples = request.args.get("n_samples", 100, type=int)
    positive = request.args.get("slope", True, type=bool)
    y_var = "wage"
    x_var = "age"
    dummy = "gender"

    data = {}
    cont = np.random.randint(20, 66, int(n_samples))
    
    
    if positive:
        slope = 3
    else:
        slope = -3
    
    y_line = cont*slope

    if positive:
        inter = 10
    else:
        inter = np.abs(np.min(y_line)) + 10

    depen = inter +  y_line + np.random.normal(0, 20, n_samples)
    data[y_var]= depen
    data[x_var] = cont
    if dummy:
        data[dummy] = np.random.randint(0, 2, n_samples)
    df = pd.DataFrame(data)
    df_list = df.values.tolist()
    JSONP_data = jsonpify(df_list)
    return JSONP_data
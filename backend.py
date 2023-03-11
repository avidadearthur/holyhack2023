from flask import Flask
import json

from data_types.regression import regression_api
from data_types.clustering import clustering_api

app = Flask(__name__)

@app.route('/', methods=['GET'])
def welcome_page():
    return json.dumps({"data":"This is the #haggethonners backend"})

app.register_blueprint(regression_api)
app.register_blueprint(clustering_api)

app.run()
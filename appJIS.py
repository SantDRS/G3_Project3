from flask import Flask, jsonify
import json
from bson.json_util import dumps
from pymongo import MongoClient

app = Flask(__name__)

# Define the MongoDB connection details
client = MongoClient('localhost', 27017)

# Define the collections to use
wine_collection = client['wineDB']['Wines']
country_collection = client['wineDB']['country']
region_collection = client['wineDB']['region']
filteredWine_collection = client['wineDB']['filteredWine']
pairing_collection = client['wineDB']['pairing_by_varietal']

@app.route('/')
def index():
    return "here are your options"

@app.route('/wines')
def get_wines():
    # Retrieve all documents from the Wines collection
    wines = list(wine_collection.find())
    wine_str = dumps(wines)
    wine_son = json.loads(wine_str)
    # Return the wines as a JSON object
    response = jsonify({"wines":wine_son})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8080')
    return response

@app.route('/countries')
def get_countries():
    # Retrieve all documents from the country collection
    countries = list(country_collection.find())
    country_str = dumps(countries)
    country_son = json.loads(country_str)
    # Return the countries as a JSON object
    response = jsonify({"countries":country_son})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8080')
    return response

@app.route('/regions')
def get_regions():
    # Retrieve all documents from the region collection
    regions = list(region_collection.find())
    reg_str = dumps(regions)
    reg_son = json.loads(reg_str)
    # Return the regions as a JSON object
    response = jsonify({"regions":reg_son})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8080')
    return response

@app.route('/filteredWine')
def get_filteredWine():
    # Retrieve all documents from the country collection
    filteredWine = list(filteredWine_collection.find())
    filt_str = dumps(filteredWine)
    filt_son = json.loads(filt_str)
    # Return the countries as a JSON object
    response = jsonify({"filteredWine":filt_son})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8080')
    return response

@app.route('/pairing_collection')
def get_pairing_collection():
    # Retrieve all documents from the country collection
    pairingList = list(pairing_collection.find())
    pair_str = dumps(pairingList)
    pair_son = json.loads(pair_str)
    # Return the countries as a JSON object
    response = jsonify({"pairing":pair_son})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8080')
    return response

@app.route('/pairing_collection/<varietal>')
def get_varietal(varietal):
    varietal_description = list(pairing_collection.find({'varietal':varietal}))
    var_str = dumps(varietal_description)
    var_son = json.loads(var_str)
    response = jsonify({"varietal":var_son})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8080')
    return response

@app.route('/pairing_collection/rec/<dish>')
def get_recommendation(dish):
    recommend_varietal = list(pairing_collection.find({'pairing':{'$in': [dish]}}))
    rec_str = dumps(recommend_varietal)
    rec_son = json.loads(rec_str)
    response = jsonify({"recommendations":rec_son})
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:8080')
    return response

if __name__ == '__main__':
    app.run(debug=True)
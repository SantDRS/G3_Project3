from flask import Flask, jsonify
from flask_cors import CORS
import json
from bson.json_util import dumps
from pymongo import MongoClient

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:5000", "*"]}})


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
    return jsonify({"wines":wine_son})

@app.route('/countries')
def get_countries():
    # Retrieve all documents from the country collection
    countries = list(country_collection.find())
    country_str = dumps(countries)
    country_son = json.loads(country_str)
    # Return the countries as a JSON object
    return jsonify({"countries":country_son})

@app.route('/regions')
def get_regions():
    # Retrieve all documents from the region collection
    regions = list(region_collection.find())
    reg_str = dumps(regions)
    reg_son = json.loads(reg_str)
    # Return the regions as a JSON object
    return jsonify({"regions":reg_son})

@app.route('/filteredWine')
def get_filteredWine():
    # Retrieve all documents from the country collection
    filteredWine = list(filteredWine_collection.find())
    filt_str = dumps(filteredWine)
    filt_son = json.loads(filt_str)
    # Return the countries as a JSON object
    return jsonify({"filteredWine":filt_son})

@app.route('/pairing_collection')
def get_pairing_collection():
    # Retrieve all documents from the country collection
    pairingList = list(pairing_collection.find())
    pair_str = dumps(pairingList)
    pair_son = json.loads(pair_str)
    # Return the countries as a JSON object
    return jsonify({"pairing":pair_son})

@app.route('/pairing_collection/<varietal>')
def get_varietal(varietal):
    varietal_description = list(pairing_collection.find({'varietal':varietal}))
    var_str = dumps(varietal_description)
    var_son = json.loads(var_str)
    return jsonify({"varietal":var_son})

@app.route('/pairing_collection/rec/<dish>')
def get_recommendation(dish):
    recommend_varietal = list(pairing_collection.find({'pairing':{'$in': [dish]}}))
    rec_str = dumps(recommend_varietal)
    rec_son = json.loads(rec_str)
    return jsonify({"recommendations":rec_son})

@app.route('/filteredWine/top/<varietal>')
def get_top_wines(varietal):
    query = {'varietal':varietal}
    fields = {'wine': 1, 'average rating': 1, 'image': 1}
    sort = [{"average rating", -1}]
    limit = 5
    top_wine = list(filteredWine_collection.find(query,fields).sort(sort).limit(limit))
    top_wine_str = dumps(top_wine)
    top_wine_son = json.loads(top_wine_str)
    return jsonify({"Top Wines": top_wine_son})

@app.route('/filteredWine/List/<varietal>')
def get_list_wines(varietal):
    query = {'varietal':varietal}
    fields = {'wine': 1, 'average rating': 1}
    sort = [{"wine", -1}]
    wines = list(filteredWine_collection.find(query,fields).sort(sort))
    wines_str = dumps(wines)
    list_of_wines = json.loads(wines_str)
    return jsonify({"List of Wines": list_of_wines})

if __name__ == '__main__':
    app.run(debug=True)

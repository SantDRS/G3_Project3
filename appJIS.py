from flask import Flask, jsonify
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

@app.route('/wines')
def get_wines():
    # Retrieve all documents from the Wines collection
    wines = list(wine_collection.find())
    # Return the wines as a JSON object
    return dumps(wines)

@app.route('/countries')
def get_countries():
    # Retrieve all documents from the country collection
    countries = list(country_collection.find())
    # Return the countries as a JSON object
    return dumps(countries)

@app.route('/regions')
def get_regions():
    # Retrieve all documents from the region collection
    regions = list(region_collection.find())
    # Return the regions as a JSON object
    return dumps(regions)

@app.route('/filteredWine')
def get_filteredWine():
    # Retrieve all documents from the country collection
    filteredWine = list(filteredWine_collection.find())
    # Return the countries as a JSON object
    return dumps(filteredWine)

@app.route('/pairing_collection')
def get_pairing_collection():
    # Retrieve all documents from the country collection
    pairingList = list(pairing_collection.find())
    # Return the countries as a JSON object
    return dumps(pairingList)

if __name__ == '__main__':
    app.run(debug=True)
import requests
import json

url = "http://127.0.0.1:5000/pairing_collection"

response = requests.get(url)

if response.status_code == 200:
    json_data = json.loads(response.content)
    pairing_items = set()
    for item in json_data:
        for pairing in item['pairing']:
            pairing_items.add(pairing)
    unique_pairings = list(pairing_items)
    print(unique_pairings)
else:
    print("Error: Could not retrieve data from the specified URL.")
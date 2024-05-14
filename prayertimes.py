import requests
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/get-date")
def get_date():
    response = requests.get("http://api.aladhan.com/v1/timingsByCity?city=Tampa&country=United States of America&state=FL&method=2")
    date = response.json() ["data"] ['date'] ['readable'] 
    return jsonify(date=date)

@app.route("/fajr")
def fajr():
    response = requests.get("http://api.aladhan.com/v1/timingsByCity?city=Tampa&country=United States of America&state=FL&method=2")
    fajrtime = response.json() ["data"] ["timings"] ["Fajr"]
    return jsonify(fajrtime = fajrtime)

@app.route("/duhur")
def duhur():
    response = requests.get("http://api.aladhan.com/v1/timingsByCity?city=Tampa&country=United States of America&state=FL&method=2")
    duhur = response.json() ["data"] ["timings"] ["Dhuhr"]
    return jsonify(duhur = duhur)

@app.route("/asr")
def asr():
    response = requests.get("http://api.aladhan.com/v1/timingsByCity?city=Tampa&country=United States of America&state=FL&method=2")
    asr = response.json() ["data"] ["timings"] ["Asr"]
    return jsonify(asr = asr)

@app.route("/maghrib")
def maghrib():
    response = requests.get("http://api.aladhan.com/v1/timingsByCity?city=Tampa&country=United States of America&state=FL&method=2")
    maghrib = response.json() ["data"] ["timings"] ["Maghrib"]
    return jsonify(maghrib = maghrib)

@app.route("/isha")
def isha():
    response = requests.get("http://api.aladhan.com/v1/timingsByCity?city=Tampa&country=United States of America&state=FL&method=2")
    isha = response.json() ["data"] ["timings"] ["Isha"]
    return jsonify(isha = isha)

if __name__ == "__main__":
    app.run(debug=True)
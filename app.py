from flask import Flask, jsonify, request, render_template
import requests

app = Flask(__name__)

CITY = ""  

import os
API_KEY = os.environ.get("API_KEY")

@app.route("/")
def index():
    return render_template('index.html', title='Welcome')

@app.route("/api/getdata", methods=["GET"])
def get_data():
    url = f"http://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric"
    response = requests.get(url) 
    data = response.json()
    print(CITY)
    return jsonify(data)

@app.route("/api/changecity", methods=["POST"])
def change_city():
    global CITY
    data = request.get_json()
    CITY = data["city"]
    print(data["city"])
    print(CITY)
    return data["city"], 204

    return CITY
if __name__ == "__main__":
    app.run(debug=True)
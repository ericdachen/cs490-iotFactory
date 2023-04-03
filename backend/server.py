from flask import Flask, request
from backend_sql import *
from flask_cors import CORS
import json
from hue.py import *

# Set up flask app
app = Flask(__name__)
CORS(app)


def to_json(func):
    def wrapper(*args, **kwargs):
        return json.dumps(func(*args, **kwargs))
    wrapper.__name__ = func.__name__
    return wrapper


### Using the following API ###
# https://github.com/tigoe/hue-control
###############################


# as a prerequisite, setup the above API is required to attain functionality to any part of this backend,
# this includes setting up and accessing a Hue Bridge, as described in the API documentation. 


# in this case, we use and submit 192.168.0.3 as the IP of the bulb


# logs the current data to look at later
def logResponse(res):
    with open("output.csv", "wf") as outputfile:
        outputfile.write(res)


@app.route("/get-iot-status", methods=["GET"])
@to_json
def getStatusofBulb():
    data = request.form
    addr = data['addr']
    response = getBulbStatus(addr)
    logResponse(response)
    return response


@app.route("/changeBulbStatus", methods=["PUT"])
def changeStatusofBulb():
    data = request.form
    event = data['status']
    addr = data['addr']
    response = changeLight(event, addr)
    logResponse(response)
    return response

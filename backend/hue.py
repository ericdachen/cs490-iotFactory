import requests
import json
from flask import Flask, request

address = '';       # IP address of the Hue hub
username = '';      # username on the hub
requestUrl = 'http://ipaddress/api/';  # generic hub URL
lightNumber = 2;    # number of the light to control
lightState = {}
lightState['on']=True
lightState['bri']=0
document = None
# a div for responses from the Hue hub:
responseDiv = None
# UI elements in the page:
slider, onButton, statusButton, newuserButton = None

# when the page loads, do this (like setup() in p5.js):
def setup():
    # Add event listeners to UI elements in the page:
    slider = document.getElementById("bri")
    slider.addEventListener("change", changeLight)

    onButton = document.getElementById("on")
    onButton.addEventListener("click", changeLight)

    statusButton = document.getElementById("lights")
    statusButton.addEventListener("click", getSystemStatus)

    newuserButton = document.getElementById("newuser")
    newuserButton.addEventListener("click", createUser)

    lightNum = document.getElementById("lightNumber")
    lightNum.addEventListener("change", setLightNumber)

    #set the response div in a global variable for convenience:
    responseDiv = document.getElementById('responseDiv')


# gets all the lights, via the endpoint
# GET /api/username/lights
def getSystemStatus():
    thisRequest = 'lights'
    sendRequest(thisRequest, 'GET')


# set the credentials for the Hue hub:
def setCreds():
    addressField = document.getElementById("address")
    address = addressField.value

    userField = document.getElementById("username")
    username = userField.value
    # if there's a valid address,
    # and no link to the debug page on this document,
    # then create that link:
    if address and not document.getElementById('debugLink'):
        # form the debug page URL:
        debugUrl = 'http://' + address + '/debug/clip.html'
        # make it into an anchor (<a>) element:
        newLink = document.createElement("a")
        # add the text of the element and the href:
        newLink.innerHTML = "Link to debug page for this hub"
        newLink.href = debugUrl
        # make it open in a new page:
        newLink.target = "_blank"
        # give it an ID so you can look for it next time
        # this function is called:
        newLink.id = "debugLink"
        # attach it to the address div:
        addressDiv = document.getElementById("addressDiv")
        addressDiv.appendChild(newLink)

    # print the address and username in the response div:
    responseDiv.innerHTML = 'address: ' + address + '<br>username: ' + username


# set the number of the light to be changed:
def setLightNumber():
    lightNum = document.getElementById("lightNumber")
    lightNumber = lightNum.value


# create a new user when the hub button is pressed:
def createUser(userid):
    devicetype = document.getElementById("devicetype").value
    # if there is no value for device type,
    # notify and leave the function:
    if not devicetype:
        responseDiv.innerHTML = "please enter devicetype. You can use your own name."
        return

    # make a new user request with the devicetype
    data = { "devicetype": devicetype }
    sendRequest('newuser', 'POST', data)

def getBulbStatus(address):
    status = lightState[address]
    if status.on:
        return True
    else:
        return False

def changeLight(event, addr):
    event.target.id = addr
    # if it was the on button that called this function:
    if event.target.id is 'on':
        # if the button reads "On", turn the light on:
        if event.target.value == 'On':
            lightState.on = True
            # change the button label to off:
            event.target.value = 'Off'
        else:
            # if the button reads "Off", turn the light off:
            lightState.on = False
            # change the button label to on
            event.target.value = 'On'


    # if the lightState is on:
    if lightState.on:
        # get the slider's value and set the brightness:
        lightState.bri = int(slider.value)
    else:
        # if lightState is off,
        # delete the bri property so as not to cause an
        # error in the hub's response:
        del lightState.bri


    # send the request:
    thisRequest = 'lights/' + lightNumber + '/state/'
    sendRequest(thisRequest, 'PUT', lightState)


# this function makes the actual request using fetch():
def sendRequest(request, requestMethod, data):
    # fill in hub address and username from credentials fields:
    setCreds()
    # set the url for this request:
    url = requestUrl

    # if there's no address set,
    # let the user know, and stop this function:
    if not address:
        getResponse("please set the hub's IP address")
        return
    else:
        # insert IP address into the url:
        url = url.replace('ipaddress', address)

    # for any request but the newuser one, add the username:
    if request is not 'newuser':
        # if there's no username, let them know and stop:
        if not username:
            getResponse("please set the app username")
            return
        else:
            # otherwise add the username to the request:
            url += username + '/'
            # add the rest of the request:
            url += request



    # set the parameters:
    params = {
        'method': requestMethod, # GET, POST, PUT, DELETE, etc.
        # mode: 'no-cors', // if you need to turn off CORS, use this
        'headers': {    # any HTTP headers you want can go here
            'accept': 'application/json'
        }
    }
    # if it's not a GET request and there's data to send,
    # add it:
    if requestMethod is not 'GET'or data:
        params.body = str(data)

    # make the request:
    response = requests.get(url, params)
    return response


# function to call when you've got something to display:
def getResponse(data):
    responseDiv.innerHTML = data
   # parseResults(data);


# listen for the HTML page to load fully:
document.addEventListener('DOMContentLoaded', setup)

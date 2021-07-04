import requests
import json

from decouple import config


def shortener(url):
    linkRequest = {
        "destination": url
        , "domain": {"fullName": "rebrand.ly"}
        # , "slashtag": "A_NEW_SLASHTAG"
        # , "title": "Rebrandly YouTube channel"
    }

    requestHeaders = {
        "Content-type": "application/json",
        "apikey": config("YOUR_API_KEY"),
    }

    r = requests.post("https://api.rebrandly.com/v1/links",
                      data=json.dumps(linkRequest),
                      headers=requestHeaders)

    if (r.status_code == requests.codes.ok):
        link = r.json()
        print("Long URL was %s, short URL is %s" % (link["destination"], link["shortUrl"]))
        return link["shortUrl"]
    else:
        print("r.json:",r.json(),"r;",r,"r.status_code:",r.status_code,"requests.codes:",requests.codes.ok)
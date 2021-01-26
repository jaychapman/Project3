# Project3

See the live site here: https://young-castle-12998.herokuapp.com/

# Age Safe at Home

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Description

This is a full stack website using node, express, mongodb and mongoose. The website also uses twilio autopilot for a chatbot: https://www.twilio.com/autopilot.

This website is built for a fictional company called Age Safe at Home. This fictional company's business is performing background checks on home health care companies. They want a website that will provide a resource for people looking for high quality home health care for loved ones. The company also needs a method for signing up new home health care providers that want to expand their marketing and lead generation. This website acts a a bridge to bring those two parties together and offer each one a specific benefit. The user will get access to quality home health care workers that have passed a background check and the providers will be provided a new marketing channel and advantage over some of their competition.

When users enter their information on the site they are taken to a page that displays providers that provide services in their area. The calculations are determined using data from [zip-codes api](https://www.zip-codes.com/zip-code-api.asp).

When the providers enter their information they are asked their zip code and the radius that they offer their services (10, 20, 30 miles). This information is sent to the database, but it is not readily available to the users until it is authorized by an administrator. The administrator's role is to update the provider's status when the background information is completed. Once it is completed the administrator can update the information on the admin page and the providers status will be updated from "pending" to "active". At that time the providers information is updated in the database and it will be available to users.

The chatbot that sits at the bottom right of the screen is always available if the user has any questions or wants to speak with a representitive. It is a good method for capturing leads that might be skeptical of filling out an online form.

## Questions

If you have any questions about this project feel free to email me at jaychap77@yahoo.com.

For more information, or to check out my other projects visit my github page: [jaychapman](https://github.com/jaychapman).

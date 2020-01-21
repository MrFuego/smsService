

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.post('/sms', function(req, res) {
    console.log(req.body);
    var msgFrom = req.body.From;
    var msgBody = req.body.Body;
    console.log(msgBody);

    var str_pos = msgBody.toLowerCase().indexOf("homo");
    var str_pos2 = msgBody.toLowerCase().indexOf("owen");
    var str_pos3 = msgBody.toLowerCase().indexOf("jan");
    var str_pos4 = msgBody.toLowerCase().indexOf("mcdo");
    var str_pos5 = msgBody.toLowerCase().indexOf("hannes");
    var str_pos6 = msgBody.toLowerCase().indexOf("brandweer");

    let hetAntwoord = 
        `
            <Response>
                <Message>
                    Hello ${msgFrom}, uw bericht bevatte geen gevoelige woorden, dus heeft geen correct antwoord gekregen, probeer het nog eens, maar dan deze keer met de juiste woordcombinaties!!!
                </Message>
            </Response>
        `
    ;
    

    if( str_pos > -1 && str_pos2 > -1){
        hetAntwoord =
            `
                <Response>
                    <Message>
                        Ik weet niet of Owen homo is! Vraag het hem anders eens!
                    </Message>
                </Response>
            `
    }

    if( str_pos3 > -1 && str_pos4 > -1){
        hetAntwoord =
            `
                <Response>
                    <Message>
                        Jan houdt inderdaad van de Mc Donalds!
                    </Message>
                </Response>
            `
    }

    if( str_pos5 > -1 && str_pos6 > -1){
        hetAntwoord =
            `
                <Response>
                    <Message>
                        Hannes is inderdaad een brandweerman!
                    </Message>
                </Response>
            `
    }

    res.send(
        hetAntwoord
    );
});

http.createServer(app).listen(3000, () => {
    console.log('Express server listening on port 3000');
});
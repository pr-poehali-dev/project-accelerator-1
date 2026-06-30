import os
import json
import urllib.request

CHAT_ID = '5072108025'

def handler(event: dict, context) -> dict:
    """Отправляет уведомление в Telegram при нажатии кнопки 'Забронировать место на курсе'"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = {}
    if event.get('body'):
        body = json.loads(event['body'])

    tariff = body.get('tariff', 'не указан')
    text = f"🔔 Новое бронирование!\n\nТариф: {tariff}\nВремя: {body.get('time', 'только что')}"

    token = os.environ['TELEGRAM_BOT_TOKEN']
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = json.dumps({'chat_id': CHAT_ID, 'text': text, 'parse_mode': 'HTML'}).encode()

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
    urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }

import os
import json
import urllib.request
from datetime import datetime

CHAT_ID = '5072108025'

def handler(event: dict, context) -> dict:
    """Отправляет уведомление владельцу в Telegram когда кто-то хочет сделать оплату"""

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

    tariff_name = body.get('tariff', 'не указан')
    tariff_price = body.get('price', '')
    now = datetime.now().strftime('%d.%m.%Y %H:%M')

    text = (
        f"💰 <b>Кто-то хочет сделать оплату!</b>\n\n"
        f"📋 Тариф: <b>{tariff_name}</b>\n"
        f"💵 Сумма: <b>{tariff_price}</b>\n"
        f"🕐 Время: {now}"
    )

    token = os.environ['TELEGRAM_BOT_TOKEN']
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = json.dumps({
        'chat_id': CHAT_ID,
        'text': text,
        'parse_mode': 'HTML'
    }).encode()

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
    urllib.request.urlopen(req)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }

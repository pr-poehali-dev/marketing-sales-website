import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any
from pydantic import BaseModel, EmailStr, Field, ValidationError

class ContactFormRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    company: str = Field(..., min_length=1, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Process contact form submissions and send to Telegram
    Args: event with httpMethod, body; context with request_id
    Returns: HTTP response with success/error status
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
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
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        form_data = ContactFormRequest(**body_data)
        
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID')
        
        if not bot_token or not chat_id:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'error': 'Telegram configuration missing',
                    'message': 'Пожалуйста, настройте Telegram бота в настройках проекта'
                })
            }
        
        telegram_message = f"""
🆕 Новая заявка с сайта

👤 Имя: {form_data.name}
📧 Email: {form_data.email}
🏢 Компания: {form_data.company}

💬 Сообщение:
{form_data.message}
"""
        
        url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
        data = urllib.parse.urlencode({
            'chat_id': chat_id,
            'text': telegram_message,
            'parse_mode': 'HTML'
        }).encode()
        
        req = urllib.request.Request(url, data=data)
        with urllib.request.urlopen(req) as response:
            response.read()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': True,
                'message': 'Заявка успешно отправлена'
            })
        }
        
    except ValidationError as e:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Validation error',
                'details': e.errors()
            })
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Internal server error',
                'message': str(e)
            })
        }

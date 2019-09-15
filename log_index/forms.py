from django import forms

# from captcha.fields import ReCaptchaField
#from captcha.widgets import ReCaptchaV3
from snowpenguin.django.recaptcha3.fields import ReCaptchaField

class ContactForm(forms.Form):
	name = forms.CharField(max_length = 128, required = True)
	email = forms.EmailField(max_length = 254, required = True)
	message = forms.CharField(max_length = 2500, widget = forms.Textarea, required = True)
	captcha = ReCaptchaField(required = True)

	name.widget.attrs.update({'class':'form-control', 'placeholder': 'Имя'})
	email.widget.attrs.update({'class':'form-control', 'placeholder': 'Эмеил'})
	message.widget.attrs.update({'class':'form-control', 'placeholder': 'Сообщение','rows': '5'})
	captcha.widget.attrs.update({'class': 'grecaptcha-badge'})
	#captcha.widget.api_params.update({'hl': 'ru'})

	


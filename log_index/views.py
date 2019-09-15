from django.shortcuts import render, redirect
from django.views.generic import View
from django.core.mail import send_mail, BadHeaderError

from .forms import ContactForm


class index(View):

	def get(self, request):
		form = ContactForm()
		return render(request, 'log_index/index.html', context={'form': form})

	def post(self, request):
		sent = False
		form = ContactForm(request.POST)
		if form.is_valid():
			subject = 'Письмо от {}'.format(form.cleaned_data['name'])
			message = 'Почто отправителя: {}/n{}'.format(form.cleaned_data['email'], form.cleaned_data['message'])
			try:
				send_mail(subject, message, 'logopedlee.ru@gmail.com', ['denislee98@gmail.com'])
			except BadHeaderError:
				return render(request, 'log_index/index.html',  context={'form': form, 'sent': sent})
			sent = True
		return render(request, 'log_index/index.html',  context={'form': form, 'sent': sent})




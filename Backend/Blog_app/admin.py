from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(Blog)
admin.site.register(Points)
admin.site.register(Comments)
admin.site.register(contact)
admin.site.register(Apointment)
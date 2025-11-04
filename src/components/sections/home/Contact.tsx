'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Plane,
  Globe,
} from 'lucide-react';

const DEFAULT_CONTACT = {
  badge: 'Plan Your Journey',
  mainTitle: 'Ready to Explore',
  mainTitleHighlight: 'the World?',
  mainDescription:
    "Let our travel experts help you plan your perfect adventure. Tell us your dream destination and we'll create an unforgettable experience just for you.",
  formTitle: 'Start Planning Your Trip',
  formDescription:
    "Share your travel preferences and we'll get back to you within 24 hours with a personalized itinerary.",
  submitButton: 'Plan My Adventure',
  contactSectionTitle: 'Get Travel Assistance',
  method1Title: 'Email Support',
  method1Description: 'Get detailed travel information',
  method1Contact: 'travel@exploretheworld.com',
  method2Title: 'Call Our Experts',
  method2Description: 'Speak with travel specialists',
  method2Contact: '+1 (555) EXPLORE',
  method3Title: 'Live Chat',
  method3Description: 'Instant travel assistance',
  method3Contact: 'Available 24/7',
  officesSectionTitle: 'Our Travel Centers',
  office1City: 'Paris Office',
  office1Address: '25 Champs-Élysées, European Tours Hub',
  office1Timezone: 'CET (UTC+1)',
  office2City: 'Marrakech Office',
  office2Address: 'Medina Quarter, Morocco Adventures',
  office2Timezone: 'WET (UTC+0)',
  office3City: 'Madrid Office',
  office3Address: 'Gran Vía 42, Spanish Experiences',
  office3Timezone: 'CET (UTC+1)',
  hoursTitle: 'Travel Consultation Hours',
  hoursWeekdayLabel: 'Monday - Friday',
  hoursWeekdayTime: '8:00 AM - 8:00 PM',
  hoursSaturdayLabel: 'Saturday',
  hoursSaturdayTime: '9:00 AM - 6:00 PM',
  hoursSundayLabel: 'Sunday',
  hoursSundayTime: '10:00 AM - 4:00 PM',
  supportNote: 'Emergency travel support available 24/7 for all bookings',
  nameLabel: 'Full Name *',
  namePlaceholder: 'Your Name',
  emailLabel: 'Email Address *',
  emailPlaceholder: 'your.email@example.com',
  destinationLabel: 'Preferred Destination *',
  destinationPlaceholder: 'Choose your dream destination',
  messageLabel: 'Tell Us About Your Dream Trip *',
  messagePlaceholder:
    'Describe your ideal vacation: activities you enjoy, travel style, group size, special interests...',
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: '',
  });

  const destinations = [
    { value: 'france', label: 'France - Romance & Culture' },
    { value: 'morocco', label: 'Morocco - Desert & Medinas' },
    { value: 'spain', label: 'Spain - Beaches & Architecture' },
    { value: 'egypt', label: 'Egypt - Pyramids & History' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Travel inquiry submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: config.method1Title,
      description: config.method1Description,
      contact: config.method1Contact,
    },
    {
      icon: Phone,
      title: config.method2Title,
      description: config.method2Description,
      contact: config.method2Contact,
    },
    {
      icon: MessageSquare,
      title: config.method3Title,
      description: config.method3Description,
      contact: config.method3Contact,
    },
  ];

  const offices = [
    {
      city: config.office1City,
      address: config.office1Address,
      timezone: config.office1Timezone,
    },
    {
      city: config.office2City,
      address: config.office2Address,
      timezone: config.office2Timezone,
    },
    {
      city: config.office3City,
      address: config.office3Address,
      timezone: config.office3Timezone,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/30 text-primary">
            <Plane className="size-4 mr-2" />
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Globe className="size-6 text-primary" />
                <span data-editable="formTitle">{config.formTitle}</span>
              </CardTitle>
              <CardDescription>
                <span data-editable="formDescription">{config.formDescription}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      <span data-editable="nameLabel">{config.nameLabel}</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder={config.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      <span data-editable="emailLabel">{config.emailLabel}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder={config.emailPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="destination" className="block text-sm font-medium mb-2">
                    <span data-editable="destinationLabel">{config.destinationLabel}</span>
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">{config.destinationPlaceholder}</option>
                    {destinations.map(dest => (
                      <option key={dest.value} value={dest.value}>
                        {dest.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    <span data-editable="messageLabel">{config.messageLabel}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder={config.messagePlaceholder}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-base py-6 group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                >
                  <span data-editable="submitButton">{config.submitButton}</span>
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                <span data-editable="contactSectionTitle">{config.contactSectionTitle}</span>
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/30 transition-colors cursor-pointer group hover:shadow-md"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">
                              <span data-editable={`method${index + 1}Title`}>{method.title}</span>
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              <span data-editable={`method${index + 1}Description`}>
                                {method.description}
                              </span>
                            </p>
                            <p className="font-medium text-primary">
                              <span data-editable={`method${index + 1}Contact`}>
                                {method.contact}
                              </span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                <span data-editable="officesSectionTitle">{config.officesSectionTitle}</span>
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors bg-gradient-to-r from-background to-muted/20"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-primary">
                          <span data-editable={`office${index + 1}City`}>{office.city}</span>
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          <span data-editable={`office${index + 1}Address`}>{office.address}</span>
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-accent/20 text-accent-foreground"
                      >
                        <span data-editable={`office${index + 1}Timezone`}>{office.timezone}</span>
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50 bg-gradient-to-br from-background to-muted/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  <span data-editable="hoursTitle">{config.hoursTitle}</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursWeekdayLabel">{config.hoursWeekdayLabel}</span>
                    </span>
                    <span data-editable="hoursWeekdayTime">{config.hoursWeekdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSaturdayLabel">{config.hoursSaturdayLabel}</span>
                    </span>
                    <span data-editable="hoursSaturdayTime">{config.hoursSaturdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSundayLabel">{config.hoursSundayLabel}</span>
                    </span>
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSundayTime">{config.hoursSundayTime}</span>
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    <span data-editable="supportNote">{config.supportNote}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

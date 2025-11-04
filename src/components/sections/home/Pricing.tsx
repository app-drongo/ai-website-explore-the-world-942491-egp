'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, MapPin, Users, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  badge: 'Travel Packages 2024',
  mainTitle: 'Discover Amazing',
  mainTitleHighlight: 'Travel Deals',
  mainDescription:
    'Choose your perfect adventure with our carefully curated travel packages. Expert guides, authentic experiences, and unforgettable memories await.',
  billingMonthly: 'Per Person',
  billingAnnual: 'Group Rates',
  billingAnnualBadge: 'Save 25%',
  plan1Name: 'Explorer',
  plan1Description: 'Perfect for solo travelers and couples seeking adventure',
  plan1Price: '$899',
  plan1Period: '/person',
  plan1CTA: 'Book Adventure',
  plan1CTAHref: '#contact',
  plan2Name: 'Adventurer',
  plan2Description: 'Most popular choice for families and small groups',
  plan2Price: '$1,299',
  plan2Period: '/person',
  plan2Badge: 'Most Popular',
  plan2CTA: 'Start Journey',
  plan2CTAHref: '#contact',
  plan2Trial: 'Free consultation • Flexible booking • 24/7 support',
  plan3Name: 'Luxury Explorer',
  plan3Description: 'Premium experiences with exclusive access and luxury accommodations',
  plan3Price: '$2,499',
  plan3Period: '/person',
  plan3Badge: 'Premium',
  plan3CTA: 'Book Luxury',
  plan3CTAHref: '#contact',
  bottomTitle: 'Planning a custom adventure?',
  bottomDescription:
    'We create personalized travel experiences tailored to your interests, budget, and schedule. From romantic getaways to family adventures, let our travel experts design your perfect trip.',
  bottomCTA: 'Plan Custom Trip',
  bottomCTAHref: '#contact',
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: config.plan1Name,
      description: config.plan1Description,
      price: config.plan1Price,
      period: config.plan1Period,
      badge: null,
      features: [
        '5-day guided tours',
        '3-star accommodations',
        'Daily breakfast included',
        'Local transportation',
        'Expert tour guide',
        'Small group (max 12)',
        'Travel insurance',
        '24/7 support',
      ],
      cta: config.plan1CTA,
      ctaHref: config.plan1CTAHref,
      popular: false,
      icon: MapPin,
    },
    {
      name: config.plan2Name,
      description: config.plan2Description,
      price: config.plan2Price,
      period: config.plan2Period,
      badge: config.plan2Badge,
      features: [
        '8-day premium tours',
        '4-star accommodations',
        'All meals included',
        'Private transportation',
        'Certified local guides',
        'Exclusive experiences',
        'Cultural workshops',
        'Photography sessions',
        'Premium travel insurance',
        'Concierge service',
      ],
      cta: config.plan2CTA,
      ctaHref: config.plan2CTAHref,
      popular: true,
      icon: Users,
    },
    {
      name: config.plan3Name,
      description: config.plan3Description,
      price: config.plan3Price,
      period: config.plan3Period,
      badge: config.plan3Badge,
      features: [
        '12-day luxury experience',
        '5-star luxury hotels',
        'Fine dining experiences',
        'Private chauffeur service',
        'Personal travel concierge',
        'VIP access to attractions',
        'Helicopter tours',
        'Spa treatments included',
        'Premium wine tastings',
        'Luxury travel insurance',
        'Personal photographer',
        'Airport lounge access',
      ],
      cta: config.plan3CTA,
      ctaHref: config.plan3CTAHref,
      popular: false,
      icon: Calendar,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20 text-primary">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingCycle === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span data-editable="billingMonthly">{config.billingMonthly}</span>
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2',
                billingCycle === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span data-editable="billingAnnual">{config.billingAnnual}</span>
              <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
                <span data-editable="billingAnnualBadge">{config.billingAnnualBadge}</span>
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card
                key={index}
                className={cn(
                  'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                  plan.popular
                    ? 'border-red-200 shadow-lg shadow-red-100 lg:scale-105'
                    : 'border-border/50 hover:border-red-200'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-1 shadow-lg">
                      <Star className="size-3 mr-1 fill-current" />
                      <span data-editable="plan2Badge">{plan.badge}</span>
                    </Badge>
                  </div>
                )}

                {/* Background Gradient */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-yellow-50 pointer-events-none" />
                )}

                <CardHeader className={cn('relative text-center pb-8', plan.popular && 'pt-10')}>
                  {plan.badge && !plan.popular && (
                    <Badge
                      variant="outline"
                      className="mb-4 mx-auto w-fit border-yellow-300 text-yellow-700"
                    >
                      <span data-editable="plan3Badge">{plan.badge}</span>
                    </Badge>
                  )}

                  <div className="mb-4 mx-auto w-fit p-3 rounded-full bg-gradient-to-br from-red-100 to-yellow-100">
                    <IconComponent className="size-6 text-red-600" />
                  </div>

                  <CardTitle className="text-2xl mb-2">
                    <span data-editable={`plan${index + 1}Name`}>{plan.name}</span>
                  </CardTitle>
                  <CardDescription className="text-base mb-6">
                    <span data-editable={`plan${index + 1}Description`}>{plan.description}</span>
                  </CardDescription>

                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold text-red-600">
                      <span data-editable={`plan${index + 1}Price`}>{plan.price}</span>
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground mb-1">
                        <span data-editable={`plan${index + 1}Period`}>{plan.period}</span>
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="size-5 rounded-full bg-gradient-to-br from-red-100 to-yellow-100 flex items-center justify-center flex-shrink-0">
                          <Check className="size-3 text-red-600" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={cn(
                      'w-full text-base py-6',
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white'
                        : 'border-red-200 text-red-600 hover:bg-red-50'
                    )}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => navigate(plan.ctaHref)}
                    data-editable-href={`plan${index + 1}CTAHref`}
                    data-href={plan.ctaHref}
                  >
                    {plan.popular && <Zap className="size-4 mr-2" />}
                    <span data-editable={`plan${index + 1}CTA`}>{plan.cta}</span>
                  </Button>

                  {plan.name === config.plan2Name && (
                    <p className="text-center text-sm text-muted-foreground">
                      <span data-editable="plan2Trial">{config.plan2Trial}</span>
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            <span data-editable="bottomTitle">{config.bottomTitle}</span>
          </h3>
          <p className="text-muted-foreground mb-6">
            <span data-editable="bottomDescription">{config.bottomDescription}</span>
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-red-200 text-red-600 hover:bg-red-50"
            onClick={() => navigate(config.bottomCTAHref)}
            data-editable-href="bottomCTAHref"
            data-href={config.bottomCTAHref}
          >
            <span data-editable="bottomCTA">{config.bottomCTA}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

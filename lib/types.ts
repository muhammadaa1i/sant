export type Dictionary = {
  nav: {
    home: string;
    services: string;
    rooms: string;
    contact: string;
    book: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    section_label: string;
    title: string;
    description: string;
    sub_description: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      list: string[];
      footer: string;
    }[];
    top_activities_title: string;
    top_activities: {
      title: string;
      desc: string;
      benefits_title: string;
      benefits: string[];
    }[];
    massage_services_title: string;
    massage_services_subtitle: string;
    massage_services: {
      title: string;
      desc: string;
    }[];
    reviews_title: string;
    reviews_subtitle: string;
    client_video: string;
  };
  rooms: {
    section_label: string;
    title: string;
    subtitle: string;
    standard: string;
    semi_luxe: string;
    luxe: string;
    cottage: string;
    price_from: string;
    per_night: string;
    details: string;
    room_image: string;
    features: {
      meals_3: string;
      treatments_premium: string;
      treatments: string;
      balcony_view: string;
      tv_wifi: string;
      family_friendly: string;
      private_area: string;
      kitchen: string;
      all_inclusive: string;
    };
  };
  contact: {
    section_label: string;
    section_title: string;
    map_title: string;
    view_on_google_maps: string;
    view_on_yandex_maps: string;
    title: string;
    description: string;
    form_name: string;
    form_name_placeholder: string;
    form_phone: string;
    form_phone_placeholder: string;
    form_comment: string;
    form_comment_placeholder: string;
    form_submit: string;
    form_sending: string;
    form_success: string;
    form_error: string;
  };
  weather: {
    city: string;
    country: string;
    updated: string;
    unavailable_title: string;
    unavailable_message: string;
    weekdays: {
      mon: string;
      tue: string;
      wed: string;
      thu: string;
      fri: string;
      sat: string;
      sun: string;
    };
    conditions: {
      clear: string;
      mostly_clear: string;
      partly_cloudy: string;
      overcast: string;
      fog: string;
      drizzle: string;
      rain: string;
      heavy_rain: string;
      snow: string;
      showers: string;
      thunderstorm: string;
      variable: string;
    };
  };
  chatbot: {
    bubble_label: string;
    header_title: string;
    header_subtitle: string;
    greeting: string;
    placeholder: string;
    send: string;
    quick_ask: string;
    quick_questions: {
      prices: string;
      booking: string;
      treatments: string;
      location: string;
    };
    answers: {
      prices: string;
      booking: string;
      treatments: string;
      location: string;
      fallback: string;
    };
  };
  footer: {
    brand_name: string;
    copyright: string;
    address: string;
    rights: string;
    developedBy: string;
    nearest_cities: string;
    navigation: string;
  };
};

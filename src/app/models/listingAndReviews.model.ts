import { Int32, Decimal128 } from 'mongodb';

export interface ListingAndReviews {
    _id: string;
    listing_url: string;
    name: string;
    summary: string;
    space: string;
    description: string;
    neighborhood_overview: string;
    notes: string;
    transit: string;
    access: string;
    interaction: string;
    house_rules: string;
    property_type: string;
    room_type: string;
    bed_type: string;
    minimum_nights: string;
    maximum_nights: string;
    cancelation_policy: string;
    last_scraped: Date;
    calendar_last_scraped: Date;
    first_review: Date;
    last_review: Date;
    accommodates: Int32;
    bedrooms: Int32;
    beds: Int32;
    Int32_of_reviews: Int32;
    bathrooms: Decimal128;
    amenities: [];
    price: Decimal128;
    weekly_price: Decimal128;
    monthly_price: Decimal128;
    security_deposit: Decimal128;
    cleaning_fee: Decimal128;
    extra_peapole: Decimal128;
    guests_included: Decimal128;
    images: {
        thumbnail_url: string;
        medium_url: string;
        picture_url: string;
        xl_picture_url: string
    };
    host: {
        host_id: string;
        host_url: string;
        host_name: string;
        host_location: string;
        host_about: string;
        host_response_time: string;
        host_thumbnail_url: string;
        host_picture_url: string;
        host_neighbourhood: string;
        response_rate: Int32;
        host_is_superhost: boolean;
        host_has_profile_pic: boolean;
        host_identity_verified: boolean;
        host_listing_count: Int32;
        host_total_listing_count: Int32;
        host_verifications: [];
    };
    address: {
        street: string;
        subrub: string;
        government_area: string;
        market: string; country:
        string;
        country_code: string
    };
    availability: {
        availability_30: Int32;
        availability_60: Int32;
        availability_90: Int32;
        availability_365: Int32
    };
    review_scores: {
        review_scores_accuracy: Int32;
        review_scores_cleanlines: Int32;
        review_scores_checkin: Int32;
        review_scores_communication: Int32;
        review_scores_location: Int32;
        review_scores_value: Int32;
        review_scores_rating: Int32
    };
    reviews: [{
        _id: string;
        date: Date;
        listing_id: string;
        reviewer_id: string;
        reviewer_name: string;
        comments: string
    }];
}

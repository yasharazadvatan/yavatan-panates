const mongoose = require('mongoose');

const listingsAndReviewSchema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String },
    accommodates: { type: Number },
    bedrooms: { type: Number },
    beds: { type: Number },
    bathrooms: { type: mongoose.Types.Decimal128 },
    amenities: [{ type: String }],
    images: {
        thumbnail_url: { type: String },
        medium_url: { type: String },
        picture_url: { type: String },
        xl_picture_url: { type: String }
    },
    address: {
        street: { type: String },
        subrub: { type: String },
        government_area: { type: String },
        market: { type: String },
        country: { type: String },
        country_code: { type: String }
    },
    summary: { type: String },
    price: { type: mongoose.Types.Decimal128 },
    monthly_price: { type: mongoose.Types.Decimal128 },
    weekly_price: { type: mongoose.Types.Decimal128 },
    security_deposit: { type: mongoose.Types.Decimal128 },
    cleaning_fee: { type: mongoose.Types.Decimal128 },
    review_scores: {
        review_scores_accuracy: { type: Number },
        review_scores_cleanlines: { type: Number },
        review_scores_checkin: { type: Number },
        review_scores_communication: { type: Number },
        review_scores_location: { type: Number },
        review_scores_value: { type: Number },
        review_scores_rating: { type: Number }
    },
    reviews: [
        {
            _id: { type: String },
            date: { type: Date },
            listing_id: { type: String },
            reviewer_id: { type: String },
            reviewer_name: { type: String },
            comments: { type: String }
        }],
    space: { type: String },
    neighborhood_overview: { type: String },
    notes: { type: String },
    transit: { type: String },
    access: { type: String },
    interaction: { type: String },
    host: {
        host_id: { type: String },
        host_url: { type: String },
        host_name: { type: String },
        host_location: { type: String },
        host_about: { type: String },
        host_response_time: { type: String },
        host_thumbnail_url: { type: String },
        host_picture_url: { type: String },
        host_neighbourhood: { type: String },
        response_rate: { type: Number },
        host_is_superhost: { type: Boolean },
        host_has_profile_pic: { type: Boolean },
        host_identity_verified: { type: Boolean },
        host_listing_count: { type: Number },
        host_total_listing_count: { type: Number },
        host_verifications: { type: Array }
    }
    // listing_url: { type: String },
    // description: { type: String },
    // house_rules: { type: String },
    // property_type: { type: String },
    // room_type: { type: String },
    // bed_type: { type: String },
    // minimum_nights: { type: String },
    // maximum_nights: { type: String },
    // cancelation_policy: { type: String },
    // last_scraped: { type: Date },
    // calendar_last_scraped: { type: Date },
    // first_review: { type: Date },
    // last_review: { type: Date },
    // number_of_reviews: { type: Number },
    // extra_peapole: { type: mongoose.Types.Decimal128 },
    // guests_included: { type: mongoose.Types.Decimal128 },
    // availability: {
    //     availability_30: { type: Number },
    //     availability_60: { type: Number },
    //     availability_90: { type: Number },
    //     availability_365: { type: Number }
    // }
}, { collection: 'listingsAndReviews' });

module.exports = mongoose.model('ListingsAndReviews', listingsAndReviewSchema);  // schama of the defined records table in the provided db.
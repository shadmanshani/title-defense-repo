import React, { useState } from 'react';

const dummyReviews = [
    {
        name: 'John Doe',
        date: '2024-05-01',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5,
        review: 'Excellent and fast service! My laptop works like new.'
    },
    {
        name: 'Sarah Lee',
        date: '2024-04-28',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 4,
        review: 'Mobile screen replacement was quick and affordable.'
    },
    {
        name: 'Raju Ahmed',
        date: '2024-04-20',
        image: 'https://randomuser.me/api/portraits/men/65.jpg',
        rating: 5,
        review: 'Great experience! Highly recommended for PC repairs.'
    },
];

const Review = () => {
    const [reviews, setReviews] = useState(dummyReviews);
    const [form, setForm] = useState({ name: '', review: '', rating: 5 });
    const [page, setPage] = useState(1);
    const reviewsPerPage = 3;
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const paginatedReviews = reviews.slice((page - 1) * reviewsPerPage, page * reviewsPerPage);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    //  ====bujhi nai===
    const handleRating = (r) => {
        setForm({ ...form, rating: r });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReviews = [
            {
                name: form.name || 'Anonymous',
                date: new Date().toISOString().slice(0, 10),
                image: 'https://randomuser.me/api/portraits/lego/1.jpg',
                rating: form.rating,
                review: form.review,
            },
            ...reviews,
        ];
        setReviews(newReviews);
        setForm({ name: '', review: '', rating: 5 });
        setPage(1); // Always show the newest post on top
    };

    return (
        <section className="py-12 bg-base-100">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-primary mb-16 text-center">Customer Reviews</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Review Form - Left Side */}
                    <form onSubmit={handleSubmit} className="bg-base-200 rounded-lg p-6 shadow flex flex-col gap-4 md:w-1/2 w-full">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                        />
                        <textarea
                            name="review"
                            value={form.review}
                            onChange={handleChange}
                            placeholder="Write your review..."
                            className="textarea textarea-bordered w-full"
                            required
                        />
                        <div className="flex items-center gap-2">
                            <span className="font-medium">Rating:</span>
                            {[1, 2, 3, 4, 5].map((r) => (
                                <button
                                    type="button"
                                    key={r}
                                    onClick={() => handleRating(r)}
                                    className={
                                        r <= form.rating
                                            ? 'text-yellow-400 text-2xl'
                                            : 'text-gray-400 text-2xl'
                                    }
                                    aria-label={`Rate ${r}`}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                        <button className="btn btn-outline btn-primary items-center max-w-[200px] mx-auto">Submit Review</button>
                    </form>
                    {/* Reviews List - Right Side */}
                    <div className="space-y-6 md:w-1/2 w-full min-h-[540px] flex flex-col">
                        {paginatedReviews.map((rev, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row gap-4 bg-base-200 rounded-lg p-5 shadow">
                                <img src={rev.image} alt={rev.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                                        <span className="font-semibold text-lg text-primary">{rev.name}</span>
                                        <span className="text-xs text-gray-400">{rev.date}</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        {[1, 2, 3, 4, 5].map((r) => (
                                            <span key={r} className={r <= rev.rating ? 'text-yellow-400 text-lg' : 'text-gray-300 text-lg'}>★</span>
                                        ))}
                                    </div>
                                    <p className="text-base-content">{rev.review}</p>
                                </div>
                            </div>
                        ))}
                        {/* Pagination Controls */}
                        <div className="flex justify-center gap-4 mt-4">
                            <button
                                className="btn btn-sm btn-outline"
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                                disabled={page === 1}
                            >
                                Previous
                            </button>
                            <span className="px-2 py-1 text-sm">Page {page} of {totalPages}</span>
                            <button
                                className="btn btn-sm btn-outline"
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;
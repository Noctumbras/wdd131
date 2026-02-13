const total = document.getElementById('review-total');
let reviewCount = Number(window.localStorage.getItem("reviewCount")) || 0;

if (reviewCount > 1)
{
    total.innerHTML = `You have submitted a total of ${reviewCount} reviews.`
}
else 
{
    total.innerHTML = `You have submitted a total of ${reviewCount} review.`
}
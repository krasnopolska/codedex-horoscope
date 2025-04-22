let birthMonth = prompt("What month were you born in?").trim().toLowerCase(); // ask user for their birth month
console.log (`If you were born in ${birthMonth} then`)

if (birthMonth === 'January') {
    console.log (`You are Capricorn. Your prediction is Hard work pays off, and today you might see signs of it.
    A mentor or authority figure could offer praise or advice — listen closely.`)
}
else if (birthMonth === 'February') {
    console.log (`You are Aquarius. You are You're craving something different.Shake up your routine 
    or dive into a cause you care about. Just make sure your head's not too far in the clouds.`)
}
else if (birthMonth === 'March') {
    console.log (`You are Pisces. Dreamy vibes are strong — just don’t drift too far. Creative flow is high, 
    and your empathy makes you a great listener today. Someone may really need your support.`)
}
else if (birthMonth === 'April') {
    console.log (`You are Aries. Today you’re feeling fired up — channel that energy 
    into a passion project or a bold conversation you've been avoiding. Just don't bulldoze others in the process.`)
}
else if (birthMonth === 'May') {
    console.log (`You are Taurus. Craving comfort? It's okay to take a break. Nourish your senses with good food, soft music, or a nature walk. 
    Something stable is coming your way — stay grounded.`)
}
else if (birthMonth === 'June') {
    console.log (`You are Gemini. Your mind is buzzing with ideas, and people are drawn to your words today. 
    A random chat might spark something exciting — stay curious and flexible.`)
}
else if (birthMonth === 'July') {
  console.log (`You are Cancer. You might feel extra sensitive today, but that's your strength. Trust your intuition, especially in close relationships. 
  A heart-to-heart can clear the air.`)
}
else if (birthMonth === 'August') {
 console.log (`You are Leo. Your inner spotlight is glowing! Confidence is your superpower today — 
 go ahead and take the lead. Just make sure your roar isn’t drowning others out.`)
}
else if (birthMonth === 'September') {
 console.log (`You are Virgo. Details matter, but don’t overthink them. 
 A small success at work or in a task might open up new paths. Be open to imperfect progress.`)
}
else if (birthMonth === 'October') {
 console.log (`You are Libra. You're in harmony mode. Balance work and pleasure, and try to smooth over any rough edges in your social life. 
 Art or beauty could inspire a fresh idea.`)
}
else if (birthMonth === 'November') {
console.log (`You are Scorpio. Something's stirring beneath the surface. Trust your instincts but avoid jumping to conclusions. 
Secrets might be revealed — stay cool and observant.`)
}
else if (birthMonth === 'December') {
console.log (`You are Sagittarius. A spontaneous opportunity could arise — say yes if it feels right. 
Your adventurous spirit is calling, even if it's just exploring a new idea or perspective.`)
}
else { console.log('Please try again.')}





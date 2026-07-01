// ØB Rigg & Crew — kontaktskjema
// NB: Dette er en front-end-only demo. Skjemaet sender ikke faktisk e-post
// før det kobles til en backend eller en tjeneste som Formspree/Netlify Forms.

const form = document.getElementById('kontakt-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const navn = form.navn.value.trim();
    const epost = form.epost.value.trim();
    const melding = form.melding.value.trim();

    if (!navn || !epost || !melding) {
      status.textContent = 'Fyll ut navn, e-post og melding før du sender.';
      status.style.color = '#F5C518';
      return;
    }

    // Placeholder for actual submission logic.
    status.textContent = `Takk, ${navn}. Forespørselen er notert — vi svarer på ${epost} innen 48 timer.`;
    status.style.color = '#F5C518';
    form.reset();
  });
}
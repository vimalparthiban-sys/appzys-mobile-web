const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1'

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong. Please try again.')
  }
  return data
}

export const api = {
  getHealth: () => request('/health'),
  getCaseStudies: () => request('/case-studies'),
  getCaseStudyBySlug: (slug) => request(`/case-studies/${slug}`),
  submitLead: (payload) =>
    request('/leads', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  submitEstimate: (payload) =>
    request('/estimates', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
}

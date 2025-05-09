import api from './api'

export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[0]
}

export async function getPopularMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results
}

export async function getMoviesNowPlaying() {
  const {
    data: { results }
  } = await api.get('/movie/now_playing')

  return results
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

export async function getSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results[0]
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results
}

export async function getSeriesToday() {
  const {
    data: { results }
  } = await api.get('/tv/airing_today')

  return results
}

export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

export async function getTopPeople() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

export async function getMoviesVideos(type, movieId) {
  const {
    data: { results }
  } = await api.get(`/${type}/${movieId}/videos`)
  return results
}

export async function getSeriesVideos(type, serieId) {
  const {
    data: { results }
  } = await api.get(`/${type}/${serieId}/videos`)
  return results
}

export async function getTrailers(type, movieId) {
  const {
    data: { results }
  } = await api.get(`/${type}/${movieId}/videos`)

  return results
}

export async function getCredits(type, movieId) {
  const {
    data: { cast }
  } = await api.get(`/${type}/${movieId}/credits`)

  return cast
}

export async function getSimilar(type, movieId) {
  const {
    data: { results }
  } = await api.get(`/${type}/${movieId}/similar`)
  return results
}

export async function getById(type, movieId) {
  const { data } = await api.get(`/${type}/${movieId}`)

  return data
}

export async function getSearch(search) {
  const {
    data: { results }
  } = await api.get(`/search/multi?query=${search}`)
  return results
}

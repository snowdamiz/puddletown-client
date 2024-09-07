export default function useHelpers() {
  function navigate(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return {
    navigate
  }
}
export default function useHelpers() {
  function navigate(ref) {
    if (ref && ref.current) ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return {
    navigate
  }
}
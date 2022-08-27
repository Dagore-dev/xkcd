export default function ExternalLink({ url, children }) {
  return <a
    href={url}
    target='_blank'
    rel='noreferrer noppener'
    className='text-blue-700 cursor-pointer'
  >
    {children}
  </a>
}

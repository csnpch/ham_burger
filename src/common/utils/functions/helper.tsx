import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export const _class = (classString: string = '') => {
    return classString
        .trim()
        // @ts-ignore
        .replaceAll(/\s+/g, ' ')
        .replaceAll('undefined', '')
        .replaceAll('null', '')
        .replaceAll('false', '')
}


export const getCustomExternalLink = (link: string) => (
    <>
      <br />
      <br />
      <a 
        className={`linkExternal`}
        style={{ fontSize: '1.2rem', letterSpacing: '0.04rem' }}
        target="_blank"
        href={link}
      >
        <FontAwesomeIcon icon={faLink} /> Preview external link
      </a>
    </>
)
import './SectionDivider.css'

const SectionDivider = ({ variant = 'default' }) => {
  return (
    <div className={`section-divider divider-${variant}`}>
      <div className="divider-line"></div>
      <div className="divider-node">
        <div className="node-inner"></div>
      </div>
      <div className="divider-line"></div>
    </div>
  )
}

export default SectionDivider

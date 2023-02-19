import React from 'react'
import styles from './Segment.module.scss'

function Segment({ children, className, onChange, ...props }) {
  children = React.Children.map(children, child =>
    React.cloneElement(child, {
      onClick: ev => {
        onChange(ev.target.value)
      },
    }),
  )

  return (
    <ul
      className={styles.segment + (className ? ' ' + className : '')}
      {...props}
    >
      {children}
    </ul>
  )
}

function SegmentButton({
  children,
  className,
  value,
  onClick,
  selected,
  ...props
}) {
  return (
    <li className={styles.segmentItem}>
      <button
        className={
          styles.segmentButton +
          (selected ? ' ' + styles.selected : '') +
          (className ? ' ' + className : '')
        }
        value={value}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </li>
  )
}

export default Object.assign(Segment, { Button: SegmentButton })

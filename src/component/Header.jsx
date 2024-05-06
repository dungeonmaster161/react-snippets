import React from 'react'

export default React.memo(function Header({title}) { // this will not render again if props passed is same
    return (
      <div>
        {title}
      </div>
    )
  })

// export default function Header({title}) {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// }

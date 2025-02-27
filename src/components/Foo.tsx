import React from 'react'

type Props = {}

const Foo = (props: Props) => {
  console.log('test', process.env.MY_VAR);
  return (
    <div style={{color: 'red'}}>Foo</div>
  )
}

export default Foo;
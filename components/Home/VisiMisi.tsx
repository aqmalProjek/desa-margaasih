import React from 'react'
import Container from '../Container'

const VisiMisi = () => {
  return (
    <section className="mt-10">
        <Container className="bg-violet-200 box-border ">
        <div className="w-[100%] relative flex">
          <div className="w-[20%] h-3 bg-white"></div>
          <div className="w-[60%] h-3 bg-violet-700"></div>
          <div className="w-[20%] h-3 bg-amber-400"></div>
        </div>
          <div className="grid md:grid-cols-2 gap-1 p-5">
            <div>
              <h3 className="text-sm tracking-wide font-bold">VISI KAMI</h3>
              <p className="md:text-base text-sm pl-5 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus asperiores mollitia ratione rem dignissimos. Fugiat
                ipsam dicta temporibus quis nesciunt.
              </p>
            </div>
            <div>
              <h3 className="text-sm tracking-wide font-bold mt-5 md:mt-0">
                MISI KAMI
              </h3>
              <p className="md:text-base text-sm pl-5 mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                aut enim autem laboriosam laudantium, nesciunt cupiditate
                obcaecati ipsam error nostrum labore, aperiam perferendis beatae
                eveniet placeat. Nisi modi amet animi ipsa vitae quis
                voluptates, vero ipsam, beatae minima reiciendis nobis
                necessitatibus dolorum possimus nemo eius. Libero dolorum eaque
                tenetur magnam.
              </p>
            </div>
          </div>
        </Container>
      </section>
  )
}

export default VisiMisi
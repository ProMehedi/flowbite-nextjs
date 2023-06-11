import { Flowbite } from 'flowbite-react'
import NavbarSidebarLayout from '../layouts/navbar-sidebar'
import theme from '../flowbite-theme'

export default function MyPage() {
  return (
    <NavbarSidebarLayout>
      <Flowbite theme={{ theme }}>
        <div className='p-5'>
          <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sed
            ipsa ullam vel aliquid tempora qui quisquam temporibus esse
            blanditiis tenetur laboriosam corrupti mollitia, omnis laborum minus
            expedita sint explicabo molestias assumenda quod soluta iste
            numquam. Quia reprehenderit numquam dolor sed architecto corrupti
            porro corporis perferendis ut voluptas reiciendis eos voluptatem
            veritatis impedit omnis nisi nostrum delectus, ex veniam deleniti
            iusto. Quibusdam consectetur, earum asperiores voluptatem harum
            aperiam rem nobis aut officiis repudiandae nihil molestiae soluta
            impedit doloremque laudantium qui? Fugit ratione sit deleniti
            quaerat iste, laboriosam vitae, repellat culpa rerum non commodi
            amet quam, quia consequatur nostrum error odio quisquam! Itaque
            quidem distinctio ea, voluptatibus eos enim eaque minus alias quia!
            Eveniet necessitatibus odio magnam temporibus iure quam dolor,
            quibusdam rerum possimus fugit, sed quo dolorem laborum sapiente!
            Delectus distinctio doloremque totam excepturi voluptate, quia fugit
            aperiam aspernatur, hic aliquid iusto cumque et enim, suscipit ipsam
            ducimus. Quos, quo.
          </p>
        </div>
      </Flowbite>
    </NavbarSidebarLayout>
  )
}

import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" >Next.Js</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link legacyBehavior href='/'>

                                    <a class="nav-link active" aria-current="page" >Home</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link legacyBehavior href='/contact'>
                                    <a class="nav-link" >Contact</a>
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link legacyBehavior href='/about'>
                                    <a class="nav-link" >About</a>
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blog
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link legacyBehavior href='/blog' >
                                            <a class="dropdown-item" >Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href='/blog/blog1' >
                                            <a class="dropdown-item" > Blog 1</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href='/blog/blog2' >
                                            <a class="dropdown-item" >Blog 2</a>
                                        </Link>
                                    </li>
                                    <li><hr class="dropdown-divider" /> </li>
                                    <li>
                                        <Link legacyBehavior href='/blog/blog99' >
                                            <a class="dropdown-item" >Dynamic Blog </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link legacyBehavior href='/lfklsafjl'>
                                    <a class="nav-link" >404</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link legacyBehavior href='/blogs'>
                                    <a class="nav-link" >Blogs</a>
                                </Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
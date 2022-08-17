import header from "./header.module.sass";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className={header.header}>
      <div className="container">
        <div className={header.left}>
          <div className={header.img}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330.000000 150.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                className={header.svg}
                transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M2008 1223 c184 -2 481 -2 660 0 180 1 30 2 -333 2 -363 0 -510 -1
  -327 -2z"
                />
                <path
                  d="M863 1004 c-101 -135 -102 -136 -85 -160 l17 -24 32 38 c18 20 56 69
  85 109 29 40 55 72 58 72 3 0 68 -83 145 -184 139 -183 140 -184 178 -185 l39
  0 -29 38 c-91 123 -329 431 -333 432 -3 0 -51 -61 -107 -136z"
                />
                <path
                  d="M1690 1043 c0 -4 19 -52 42 -106 l41 -97 38 84 c52 118 54 126 32
  126 -14 0 -25 -15 -40 -57 -11 -32 -24 -58 -28 -58 -4 0 -17 25 -29 55 -13 32
  -29 56 -39 58 -9 2 -17 0 -17 -5z"
                />
                <path
                  d="M2035 987 c26 -48 35 -76 35 -110 0 -35 4 -47 15 -47 11 0 15 12 15
  45 0 32 10 62 36 110 34 61 35 65 15 65 -14 0 -27 -13 -41 -40 -11 -22 -22
  -40 -25 -40 -3 0 -14 18 -25 40 -14 27 -27 40 -41 40 -18 0 -17 -5 16 -63z"
                />
                <path
                  d="M2210 940 c0 -91 3 -110 15 -110 12 0 15 14 15 70 0 39 4 70 10 70 9
  0 61 -53 109 -110 l20 -25 1 108 c0 100 -1 107 -20 107 -17 0 -20 -7 -20 -52
  l-1 -53 -47 53 c-73 81 -82 74 -82 -58z"
                />
                <path
                  d="M2630 940 c0 -103 1 -110 20 -110 17 0 20 7 20 40 0 52 18 52 48 0
  17 -30 29 -40 48 -40 25 0 25 0 -16 60 -24 35 -38 66 -34 73 4 6 20 29 37 50
  l29 37 -24 0 c-15 0 -31 -12 -47 -35 -30 -44 -41 -44 -41 0 0 28 -4 35 -20 35
  -19 0 -20 -7 -20 -110z"
                />
                <path
                  d="M2820 940 c0 -102 1 -110 19 -110 17 0 20 8 23 48 3 47 3 47 38 47
  35 0 35 0 38 -47 2 -34 7 -48 18 -48 11 0 14 21 14 110 0 89 -3 110 -14 110
  -10 0 -16 -14 -18 -42 -3 -42 -4 -43 -40 -46 l-38 -3 0 45 c0 39 -3 46 -20 46
  -19 0 -20 -7 -20 -110z"
                />
                <path
                  d="M2483 995 c-12 -28 -33 -76 -47 -107 -25 -57 -25 -58 -5 -58 13 0 23
  8 26 20 10 38 86 38 96 0 3 -12 14 -20 26 -20 23 0 24 -5 -46 150 l-29 64 -21
  -49z m37 -71 c0 -8 -7 -14 -15 -14 -15 0 -21 21 -9 33 10 9 24 -2 24 -19z"
                />
                <path
                  d="M1886 945 c-52 -121 -51 -115 -29 -115 10 0 23 10 28 23 7 15 20 23
  42 25 27 3 35 -1 45 -22 12 -27 55 -38 45 -12 -26 66 -82 186 -87 186 -4 0
  -24 -38 -44 -85z m58 -11 c9 -23 8 -24 -14 -24 -11 0 -20 2 -20 4 0 12 13 36
  20 36 4 0 11 -7 14 -16z"
                />
                <path
                  d="M439 763 c-96 -125 -178 -232 -182 -240 -6 -10 1 -13 27 -13 34 0 41
  7 183 189 114 147 150 188 160 179 7 -6 53 -63 102 -127 l89 -117 -29 -39
  c-28 -37 -28 -39 -12 -59 10 -12 18 -22 19 -24 0 -1 22 25 48 58 29 36 44 65
  40 72 -13 22 -256 338 -263 343 -4 2 -86 -98 -182 -222z"
                />
                <path
                  d="M628 696 l-46 -65 78 -101 79 -101 17 26 c16 25 16 26 -41 101 l-57
  76 27 38 c26 37 26 39 10 64 -10 14 -18 26 -19 26 -1 0 -22 -29 -48 -64z"
                />
                <path
                  d="M1680 710 c0 -15 7 -20 25 -20 25 0 25 -1 25 -90 0 -83 1 -90 20 -90
  19 0 20 7 20 90 0 89 0 90 25 90 18 0 25 5 25 20 0 18 -7 20 -70 20 -63 0 -70
  -2 -70 -20z"
                />
                <path
                  d="M1860 620 c0 -103 1 -110 20 -110 16 0 20 7 20 30 0 26 4 30 28 30
  32 0 52 -16 52 -42 0 -11 7 -18 20 -18 24 0 27 35 6 66 -12 17 -12 22 0 39 21
  28 17 63 -11 90 -20 21 -34 25 -80 25 l-55 0 0 -110z m114 48 c16 -26 -4 -52
  -43 -56 -30 -3 -31 -2 -31 38 0 40 1 41 31 38 18 -2 37 -11 43 -20z"
                />
                <path
                  d="M2212 722 c55 -131 84 -192 89 -192 4 0 9 8 12 18 2 9 21 54 41 100
  34 80 35 83 14 80 -16 -2 -26 -18 -41 -60 -12 -32 -24 -58 -28 -58 -3 0 -17
  27 -29 60 -17 45 -27 60 -42 60 -11 0 -18 -4 -16 -8z"
                />
                <path
                  d="M2430 620 l0 -110 65 0 c58 0 65 2 65 20 0 17 -7 20 -45 20 -43 0
  -45 1 -45 30 0 28 2 30 40 30 33 0 40 3 40 20 0 17 -7 20 -40 20 -33 0 -40 3
  -40 20 0 17 7 20 45 20 38 0 45 3 45 20 0 18 -7 20 -65 20 l-65 0 0 -110z"
                />
                <path
                  d="M2610 620 l0 -110 60 0 c53 0 60 2 60 20 0 17 -7 20 -45 20 l-45 0 0
  90 c0 73 -3 90 -15 90 -12 0 -15 -19 -15 -110z"
                />
                <path
                  d="M2122 680 c-11 -25 -31 -71 -46 -104 -31 -70 -31 -66 -8 -66 11 0 24
  12 30 26 10 21 18 25 45 22 22 -2 35 -10 42 -25 5 -13 18 -23 28 -23 22 0 20
  8 -33 128 l-39 87 -19 -45z m32 -66 c9 -23 8 -24 -14 -24 -11 0 -20 2 -20 4 0
  12 13 36 20 36 4 0 11 -7 14 -16z"
                />
                <path
                  d="M2008 343 c184 -2 481 -2 660 0 180 1 30 2 -333 2 -363 0 -510 -1
  -327 -2z"
                />
              </g>
            </svg>
          </div>
          <div className={header.map}>
            <NavLink to="#" className={header.nav}>
              Карта
            </NavLink>
          </div>
          <div className={header.travel_routes}>
            <NavLink to="#" className={header.nav}>
              Маршруты
            </NavLink>
          </div>
        </div>
        <div className={header.signin}>
          <NavLink to="#" className={header.nav}>
            <FaUserCircle />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;

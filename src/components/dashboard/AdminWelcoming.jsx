export default function AdminWelcoming() {
  const userRole = localStorage.getItem('role');

  function getDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthNames = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
  
    return `${day} ${month} ${year}`;
  }
  const today = getDate();

  return (
    <div className="relative w-full bg-[#F8D16D] h-auto sm:h-[210px] flex justify-center items-center p-[30px] rounded-[20px] overflow-hidden">
      <svg className="absolute top-0 left-0 z-10" xmlns="http://www.w3.org/2000/svg" width="414" height="240" viewBox="0 0 414 240" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M408 -11.5005C431.726 24.2191 368.211 51.3873 367.5 94.5C366.806 136.581 402.944 180.081 382.001 217C361.377 253.357 288.885 242.829 248.765 254.905C215.166 265.019 183.145 285.174 148.718 279.727C114.654 274.338 68.651 258.31 36.9912 245.002C-14.1822 223.491 -48.726 247.581 -72.0017 197.502C-93.7958 150.611 -46.7472 87.6338 -21.7658 41.5665C-2.6326 6.28348 11.3137 -29.8018 36.991 -60.7815C66.9741 -96.9561 41.2698 -7.03749 87.9983 -4.99871C137.86 -2.82324 165.869 -38.439 209.498 -14.9986C247.549 5.4447 384.198 -47.3362 408 -11.5005Z" fill="#272C49"/>
      </svg>

      <svg className="absolute top-0 left-0 z-10" xmlns="http://www.w3.org/2000/svg" width="180" height="200" viewBox="0 0 180 200" fill="none">
        <path d="M39.9519 74.3295C42.2025 73.961 44.4422 73.4493 46.6711 72.7946C48.8387 71.8543 50.9554 70.7742 53.0213 69.5542C54.946 68.0655 56.7808 66.4507 58.5257 64.7096C60.0544 62.7373 61.4579 60.6624 62.7364 58.485C63.7342 56.1329 64.5784 53.7107 65.269 51.2185C65.6303 48.6242 65.8187 45.9994 65.8339 43.3442C65.4918 40.6712 64.9683 38.0119 64.2633 35.3662C63.1963 32.7936 61.9517 30.2804 60.5295 27.8267C58.7656 25.537 56.8408 23.351 54.7548 21.2688C52.3726 19.4354 49.858 17.7453 47.211 16.1986C44.3363 14.9729 41.3686 13.9224 38.3079 13.0471C35.1074 12.5467 31.8619 12.2431 28.5714 12.1362C25.2435 12.4351 21.924 12.9399 18.6131 13.6506C15.3749 14.7718 12.201 16.0944 9.09131 17.6183C6.16513 19.5298 3.35733 21.6241 0.667914 23.9012C-1.73422 26.5153 -3.96925 29.2803 -6.03719 32.1964C-7.72856 35.3735 -9.21311 38.658 -10.4908 42.0499C-11.324 45.6056 -11.9227 49.2158 -12.2871 52.8805C-12.1657 56.5963 -11.7969 60.3076 -11.1806 64.0144C-10.0684 67.651 -8.7117 71.2218 -7.11058 74.7267C-5.03606 78.0395 -2.73667 81.2268 -0.212411 84.2888C2.72995 87.0441 5.86173 89.6203 9.18292 92.0173C12.8366 94.009 16.6301 95.7775 20.5634 97.3227C24.7177 98.3869 28.951 99.1968 33.263 99.7526C37.6655 99.7804 42.0781 99.5387 46.5009 99.0275C50.8722 97.9748 55.1816 96.6545 59.429 95.0667C63.4809 92.9592 67.4 90.604 71.1864 88.001C74.6406 84.9355 77.8974 81.6592 80.9567 78.1721C83.5639 74.3123 85.9197 70.294 88.0239 66.1172C89.5816 61.6856 90.8483 57.1601 91.824 52.5409C92.1913 47.8057 92.246 43.05 91.988 38.2737C91.0976 33.533 89.8926 28.8489 88.373 24.2214C86.2378 19.7842 83.8068 15.4796 81.0799 11.3078C77.7953 7.47373 74.2535 3.84241 70.4547 0.413874C66.1946 -2.54667 61.7343 -5.2453 57.074 -7.68203C52.0821 -9.54677 46.9622 -11.1057 41.7141 -12.3588C36.2904 -12.9699 30.8214 -13.2498 25.3069 -13.1986C19.7893 -12.4751 14.3146 -11.416 8.88297 -10.0211C3.62629 -7.96682 -1.49905 -5.59411 -6.49308 -2.903C-11.1398 0.391444 -15.5726 3.96568 -19.7915 7.8197C-23.508 12.1798 -26.9396 16.7616 -30.0861 21.5652C-32.6032 26.7416 -34.7805 32.0655 -36.6181 37.5369C-37.7364 43.2197 -38.4808 48.9638 -38.8511 54.7695C-38.4564 60.6063 -37.6768 66.412 -36.5122 72.1865C-34.5854 77.8049 -32.2873 83.2989 -29.6181 88.6685C-26.2389 93.6993 -22.5267 98.5179 -18.4816 103.124C-13.8264 107.226 -8.89922 111.039 -3.70008 114.563C1.96697 117.445 7.82569 119.978 13.8761 122.162C20.2178 123.604 26.6564 124.658 33.1916 125.325C39.8181 125.194 46.4375 124.661 53.0499 123.725" stroke="#575D81" strokeWidth="4"/>
        <path d="M85.8513 148.37C85.2514 148.528 84.6381 148.648 84.0112 148.729C83.3672 148.729 82.7199 148.687 82.0695 148.603C81.4236 148.432 80.7857 148.219 80.1559 147.962C79.5535 147.621 78.9704 147.239 78.4068 146.816C77.893 146.316 77.4094 145.78 76.956 145.209C76.5726 144.573 76.2287 143.91 75.9243 143.22C75.7064 142.485 75.5352 141.732 75.4104 140.963C75.3837 140.172 75.4078 139.376 75.4827 138.576C75.6608 137.78 75.8906 136.993 76.1722 136.214C76.5553 135.467 76.9876 134.742 77.4689 134.04C78.043 133.395 78.66 132.786 79.3199 132.212C80.0569 131.72 80.8274 131.274 81.6313 130.874C82.4905 130.576 83.3708 130.332 84.2724 130.143C85.2024 130.069 86.1393 130.055 87.083 130.1C88.0251 130.268 88.9585 130.496 89.8833 130.786C90.775 131.196 91.6424 131.664 92.4854 132.19C93.2646 132.827 94.0047 133.515 94.7056 134.254C95.3148 135.087 95.8721 135.96 96.3774 136.874C96.7681 137.856 97.0968 138.865 97.3637 139.901C97.4997 140.975 97.5675 142.059 97.5674 143.153C97.428 144.251 97.2187 145.342 96.9394 146.425C96.5217 147.476 96.0367 148.501 95.4845 149.502C94.804 150.434 94.0635 151.323 93.263 152.171C92.3533 152.918 91.3952 153.608 90.3887 154.24C89.3001 154.745 88.1785 155.181 87.0238 155.547C85.8205 155.767 84.6023 155.91 83.3692 155.977C82.1258 155.885 80.8872 155.715 79.6534 155.464C78.4497 155.056 77.2711 154.57 76.1175 154.007C75.0339 153.296 73.9947 152.515 73 151.664C72.1119 150.685 71.2853 149.649 70.5203 148.555C69.893 147.363 69.341 146.129 68.8642 144.855C68.5482 143.519 68.3166 142.162 68.1695 140.784C68.1965 139.386 68.312 137.989 68.5159 136.594C68.8963 135.223 69.3634 133.876 69.9173 132.553C70.6386 131.3 71.4391 130.093 72.3189 128.931C73.3457 127.88 74.4389 126.895 75.5985 125.975C76.8743 125.203 78.1989 124.512 79.5722 123.902C81.0225 123.467 82.5001 123.124 84.005 122.873C85.5412 122.814 87.0809 122.853 88.6241 122.99C90.1495 123.324 91.6535 123.754 93.1362 124.282C94.5515 124.998 95.9213 125.804 97.2455 126.7C98.4559 127.765 99.5987 128.906 100.674 130.125C101.595 131.479 102.43 132.892 103.179 134.363C103.742 135.929 104.206 137.531 104.571 139.167C104.729 140.849 104.782 142.541 104.728 144.242C104.459 145.936 104.084 147.611 103.603 149.269C102.913 150.864 102.123 152.415 101.232 153.921C100.153 155.313 98.9871 156.636 97.734 157.889C96.3245 158.982 94.8472 159.984 93.302 160.897C91.6439 161.612 89.942 162.221 88.1962 162.725" stroke="#575D81" strokeWidth="3"/>
      </svg>

      <div className="relative flex flex-col sm:flex-row justify-between w-full h-full gap-y-[20px] z-20">
        <div className="flex-1 flex flex-col justify-between gap-y-[16px]">
          <div>
            <h1 className="font-extrabold text-[36px] text-[#F8D16D] welcome__text lh__0">Welcome Back!</h1>
            {userRole !== null && (
              <p className="text-white">
                Hello There 👋
              </p>
            )}
          </div>
          <div className="flex items-center gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
              <path d="M3 1.5V2.5H1.5C0.671875 2.5 0 3.17187 0 4V5.5H14V4C14 3.17187 13.3281 2.5 12.5 2.5H11V1.5C11 0.946875 10.5531 0.5 10 0.5C9.44688 0.5 9 0.946875 9 1.5V2.5H5V1.5C5 0.946875 4.55313 0.5 4 0.5C3.44688 0.5 3 0.946875 3 1.5ZM14 6.5H0V15C0 15.8281 0.671875 16.5 1.5 16.5H12.5C13.3281 16.5 14 15.8281 14 15V6.5Z" fill="white"/>
            </svg>
            <p className="text-white text-sm mt-0.5">
              {today}
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img className="w-full max-w-[190px] sm:max-w-[250px] object-contain" src="../assets/images/teddy-bear.png" alt="Teddy Bear Image"></img>
        </div>
      </div>

      <svg className="absolute bottom-0 left-[45%] z-10" xmlns="http://www.w3.org/2000/svg" width="129" height="90" viewBox="0 0 129 90" fill="none">
        <path d="M57.1822 60.3857C57.7992 59.6925 58.3742 58.9584 58.9072 58.1833C59.3436 57.3369 59.7261 56.4609 60.0547 55.5553C60.2659 54.6041 60.4145 53.6375 60.5004 52.6556C60.4552 51.6589 60.3424 50.663 60.1622 49.6682C59.8455 48.6924 59.461 47.7348 59.0087 46.7955C58.4242 45.91 57.7763 45.0598 57.065 44.2449C56.2353 43.5168 55.3515 42.8397 54.4136 42.2135C53.3801 41.7031 52.3062 41.2567 51.1918 40.8742C50.0128 40.63 48.8105 40.459 47.585 40.3613C46.3322 40.4159 45.076 40.5485 43.8163 40.7591C42.5706 41.1264 41.3426 41.5713 40.1323 42.0936C38.9785 42.7665 37.8635 43.5111 36.7872 44.3274C35.8085 45.2774 34.8879 46.2879 34.0256 47.3592C33.2972 48.5371 32.6435 49.7599 32.0646 51.0276C31.6486 52.3664 31.3196 53.7304 31.0775 55.1197C31.0178 56.5379 31.052 57.959 31.1802 59.3831C31.4985 60.7898 31.9117 62.1759 32.4197 63.5415C33.1134 64.8424 33.8964 66.0995 34.7687 67.3127C35.8094 68.4162 36.9277 69.4546 38.1235 70.4277C39.4583 71.2513 40.8531 71.9919 42.308 72.6492C43.8618 73.1257 45.4533 73.5059 47.0826 73.7898C48.7623 73.8722 50.4539 73.851 52.1576 73.7262C53.8578 73.3918 55.5422 72.9532 57.211 72.4103C58.8205 71.6635 60.3865 70.8187 61.909 69.8759C63.3179 68.7485 64.6574 67.5363 65.9274 66.239C67.0351 64.7897 68.0508 63.2747 68.9747 61.6939C69.6961 60.0049 70.3086 58.2744 70.8119 56.5026C71.0848 54.6751 71.2379 52.8343 71.2714 50.9799C71.0604 49.1285 70.7267 47.2935 70.2701 45.4749C69.5709 43.7196 68.7537 42.0107 67.8186 40.3482C66.6585 38.8072 65.3934 37.3407 64.0232 35.9485C62.4613 34.7304 60.8145 33.6107 59.0829 32.5895C57.2065 31.7852 55.2718 31.0977 53.2787 30.5272C51.1992 30.2036 49.0924 30.0084 46.9586 29.9414C44.8041 30.1363 42.6565 30.4629 40.5158 30.9211C38.4239 31.6395 36.3737 32.4843 34.3651 33.4556C32.4738 34.6683 30.6574 35.9938 28.9158 37.4322C27.3545 39.0767 25.8974 40.8127 24.5445 42.64C23.4251 44.6237 22.4335 46.6707 21.5695 48.781C20.9787 50.986 20.5316 53.2213 20.2279 55.4868C20.2206 57.7773 20.3639 60.062 20.6577 62.3409C21.2524 64.5712 21.9951 66.7589 22.8856 68.9041C24.0622 70.9282 25.3743 72.8745 26.8221 74.7432C28.5218 76.424 30.3356 77.9959 32.2636 79.4591C34.3921 80.6779 36.6053 81.7629 38.903 82.7141C41.3355 83.3787 43.8166 83.8926 46.3465 84.2558C48.9345 84.3075 51.5312 84.2007 54.1366 83.9356C56.7178 83.3536 59.2658 82.6157 61.7809 81.7218C64.1885 80.526 66.5224 79.1868 68.7825 77.7042C70.8567 75.9548 72.8201 74.0842 74.6727 72.0924" stroke="#D79951" strokeWidth="3"/>
        <path d="M90.4377 23.1939C90.1927 22.7201 89.9797 22.2277 89.7988 21.7166C89.6876 21.1757 89.6135 20.624 89.5764 20.0617C89.617 19.4869 89.6973 18.9107 89.8175 18.333C90.0181 17.7623 90.2585 17.2001 90.5387 16.6465C90.8965 16.1201 91.2913 15.6123 91.7231 15.123C92.2241 14.6805 92.7563 14.266 93.32 13.8793C93.9388 13.5569 94.5808 13.2704 95.246 13.0197C95.9476 12.8472 96.6621 12.7166 97.3895 12.6276C98.131 12.6263 98.8736 12.67 99.6172 12.7588C100.35 12.9389 101.072 13.1645 101.782 13.4355C102.457 13.7955 103.107 14.1982 103.734 14.6436C104.301 15.1692 104.832 15.7318 105.328 16.3311C105.742 16.9962 106.112 17.6894 106.437 18.4107C106.663 19.1779 106.838 19.9621 106.96 20.7634C106.973 21.5864 106.931 22.4137 106.832 23.2454C106.62 24.0721 106.352 24.8893 106.028 25.6972C105.594 26.4724 105.108 27.2246 104.569 27.9535C103.931 28.6232 103.247 29.2568 102.519 29.8546C101.71 30.369 100.866 30.8365 99.987 31.2571C99.0521 31.5749 98.0961 31.8375 97.119 32.0449C96.1148 32.1361 95.105 32.1672 94.0896 32.1381C93.0794 31.9865 92.0801 31.7737 91.0918 31.4996C90.1421 31.1048 89.2198 30.6516 88.3251 30.14C87.501 29.5176 86.7198 28.8437 85.9815 28.1183C85.3426 27.2997 84.7597 26.4403 84.2328 25.54C83.8287 24.571 83.4906 23.575 83.2183 22.5519C83.0849 21.4902 83.0234 20.4175 83.0337 19.3338C83.1904 18.2453 83.4205 17.1632 83.7238 16.0875C84.1715 15.0425 84.6891 14.0215 85.2767 13.0247C85.9972 12.0931 86.7795 11.2023 87.6236 10.3524C88.5799 9.59932 89.5856 8.90173 90.6405 8.25959C91.7788 7.74076 92.9503 7.2889 94.1549 6.90399C95.4075 6.6616 96.6743 6.49367 97.9554 6.40022C99.2447 6.45979 100.528 6.5967 101.804 6.81096C103.048 7.17906 104.264 7.62241 105.453 8.141C106.569 8.80421 107.637 9.53555 108.658 10.335C109.568 11.2601 110.414 12.2416 111.196 13.2793C111.835 14.4149 112.397 15.5909 112.88 16.8074C113.198 18.0865 113.429 19.3871 113.574 20.7092C113.54 22.0536 113.415 23.3985 113.201 24.7439C112.806 26.0685 112.323 27.3719 111.751 28.6541C111.01 29.8726 110.188 31.049 109.287 32.1831C108.236 33.2135 107.119 34.1828 105.935 35.0911C104.635 35.861 103.285 36.5544 101.887 37.1715C100.413 37.6235 98.9118 37.9882 97.3837 38.2656C95.8258 38.3613 94.2652 38.3641 92.7021 38.2741C91.1587 37.9971 89.6378 37.6276 88.1393 37.1655C86.7104 36.5231 85.3284 35.7945 83.993 34.9797C82.774 34.0031 81.6237 32.9525 80.5421 31.8277C79.6173 30.5707 78.7792 29.2568 78.028 27.8861" stroke="#D79951" strokeWidth="2"/>
      </svg>

      <svg className="absolute top-0 right-0 z-10" xmlns="http://www.w3.org/2000/svg" width="105" height="143" viewBox="0 0 105 143" fill="none">
        <path d="M83.0417 42.0427C84.3104 41.0263 85.5215 39.923 86.675 38.7329C87.6886 37.3834 88.6208 35.963 89.4717 34.4717C90.1391 32.8595 90.7057 31.1986 91.1714 29.4891C91.4204 27.7085 91.555 25.9064 91.5754 24.0829C91.359 22.2465 91.0221 20.4191 90.5647 18.6009C89.8662 16.8326 89.0492 15.1052 88.1138 13.4187C86.9497 11.8454 85.6777 10.3438 84.2976 8.91395C82.7184 7.65638 81.0498 6.49822 79.292 5.43948C77.3799 4.60347 75.4047 3.8892 73.3662 3.29666C71.2319 2.9647 69.0663 2.76959 66.8694 2.71132C64.645 2.9355 62.4252 3.30298 60.2099 3.81378C58.0411 4.61055 55.9142 5.54756 53.8294 6.6248C51.8658 7.97205 49.9807 9.44666 48.1741 11.0486C46.5589 12.8853 45.0554 14.8271 43.6634 16.8739C42.5235 19.1023 41.5223 21.4053 40.6598 23.7828C40.0959 26.2738 39.6897 28.8021 39.4412 31.368C39.5198 33.9681 39.7653 36.5642 40.1776 39.1563C40.9248 41.6975 41.8371 44.1917 42.9147 46.6388C44.3126 48.9492 45.8628 51.1707 47.5653 53.3032C49.5513 55.2187 51.666 57.0075 53.9092 58.6695C56.3786 60.0452 58.9432 61.2632 61.603 62.3235C64.4138 63.0443 67.2786 63.5857 70.1975 63.9477C73.179 63.9375 76.1679 63.7373 79.1645 63.3471C82.1273 62.5753 85.0487 61.6152 87.9286 60.4667C90.677 58.9525 93.3357 57.2641 95.9049 55.4015C98.2493 53.214 100.46 50.8786 102.537 48.3954C104.307 45.6512 105.907 42.7963 107.336 39.8308C108.393 36.688 109.253 33.4804 109.915 30.208C110.163 26.857 110.198 23.4932 110.021 20.1165C109.413 16.7686 108.59 13.4626 107.553 10.1984C106.096 7.07251 104.438 4.04239 102.578 1.10804C100.337 -1.5837 97.9202 -4.13015 95.3281 -6.53132C92.4209 -8.59784 89.3768 -10.4774 86.196 -12.1699C82.7884 -13.4546 79.2931 -14.5214 75.71 -15.3704C72.0065 -15.7626 68.2717 -15.9193 64.5057 -15.8405C60.737 -15.2843 56.9975 -14.4898 53.2872 -13.4571C49.6961 -11.9569 46.1946 -10.2312 42.7827 -8.27999C39.6081 -5.90208 36.5797 -3.32659 33.6975 -0.553518C31.1588 2.57623 28.8151 5.86188 26.6664 9.30342C24.9486 13.0061 23.4633 16.8115 22.2106 20.7197C21.4505 24.7734 20.9466 28.8684 20.6989 33.0046C20.9754 37.1579 21.5157 41.2863 22.3198 45.3899C23.6466 49.3771 25.2278 53.273 27.0636 57.0777C29.3863 60.6359 31.9374 64.0405 34.7168 67.2915C37.9148 70.1783 41.2995 72.8572 44.8707 75.3282C48.763 77.3377 52.7869 79.0969 56.9423 80.6059C61.2977 81.5831 65.7194 82.2829 70.2075 82.7051C74.7581 82.5578 79.3038 82.1231 83.8446 81.4008C88.3025 80.1072 92.6825 78.5344 96.9848 76.6824C101.06 74.2942 104.988 71.6535 108.768 68.7603" stroke="#D79951" strokeWidth="4"/>
        <path d="M86.5332 114.819C86.3238 114.067 86.1622 113.297 86.0485 112.509C86.0361 111.698 86.0764 110.883 86.1694 110.062C86.3699 109.246 86.6244 108.439 86.9328 107.641C87.3475 106.876 87.8138 106.134 88.3315 105.417C88.9466 104.76 89.6069 104.141 90.3123 103.559C91.0987 103.064 91.9203 102.618 92.7771 102.222C93.6917 101.933 94.6284 101.703 95.5873 101.531C96.5753 101.482 97.5701 101.497 98.5715 101.576C99.5698 101.784 100.558 102.059 101.536 102.398C102.477 102.866 103.391 103.396 104.278 103.988C105.094 104.698 105.868 105.463 106.598 106.283C107.227 107.201 107.799 108.162 108.314 109.167C108.704 110.243 109.025 111.346 109.279 112.477C109.389 113.647 109.425 114.826 109.386 116.015C109.195 117.204 108.927 118.384 108.583 119.554C108.089 120.684 107.52 121.785 106.879 122.857C106.098 123.85 105.253 124.795 104.342 125.692C103.313 126.475 102.233 127.193 101.101 127.847C99.8808 128.358 98.6264 128.791 97.3373 129.148C95.9984 129.339 94.6452 129.446 93.2775 129.467C91.9029 129.313 90.536 129.07 89.1769 128.74C87.8559 128.234 86.5651 127.644 85.3047 126.968C84.1268 126.129 83.0008 125.214 81.9265 124.223C80.9755 123.092 80.0953 121.9 79.2858 120.645C78.6339 119.284 78.0677 117.881 77.5872 116.434C77.2893 114.924 77.0871 113.393 76.9805 111.842C77.0705 110.275 77.2601 108.712 77.5492 107.154C78.0364 105.631 78.6207 104.137 79.302 102.674C80.1699 101.296 81.1257 99.9729 82.1696 98.7041C83.3757 97.5671 84.6547 96.5064 86.0065 95.5221C87.4847 94.7093 89.0151 93.9904 90.5979 93.3654C92.2615 92.9417 93.9528 92.6238 95.6716 92.4119C97.4189 92.4188 99.1664 92.5371 100.914 92.7666C102.634 93.219 104.326 93.7809 105.99 94.4525C107.57 95.3362 109.094 96.3205 110.563 97.4056C111.895 98.6778 113.147 100.035 114.319 101.477C115.309 103.068 116.198 104.722 116.987 106.439C117.558 108.256 118.015 110.11 118.357 112C118.46 113.933 118.441 115.872 118.3 117.817C117.913 119.744 117.404 121.646 116.773 123.522C115.906 125.318 114.925 127.058 113.83 128.743C112.523 130.287 111.119 131.748 109.617 133.125C107.942 134.311 106.193 135.389 104.369 136.361C102.423 137.1 100.431 137.715 98.393 138.207C96.2941 138.439 94.1812 138.537 92.0544 138.502C89.9334 138.197 87.8325 137.758 85.7517 137.184C83.745 136.346 81.792 135.381 79.8927 134.29C78.1329 132.958 76.4579 131.516 74.8678 129.963C73.4752 128.21 72.1939 126.369 71.0239 124.442C70.0983 122.368 69.3041 120.237 68.6411 118.049" stroke="#D79951" strokeWidth="3"/>
      </svg>
    </div>
  )
}
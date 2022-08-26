import '../resources/css/tailwind.css'
import React from 'react';

const Home = () => {
	fetch('https://meet.shardings.com/session', {
		method: 'GET'
	}).then(res => res.json())
	.then(session => {
		if (session.error) {
			console.error(session.error);
			document.location.assign('/auth');
		} else if (session.success) {
			console.success(session.success);
			//handleAuthStateChange(session.user);
		} else {
			console.error(session);
		}
	});


	return (
		<div className="h-full bg-[#fafaf9] subpixel-antialiased noscrollbar select-none" style={{ fontFamily: 'Inter' }}>
			<div id="change-avatar-popup" className="hidden h-full w-full flex absolute z-[14]">
				{/* The change avatar popup will be rendered here */}
			</div>
			<main className="h-full flex">
				{/* Left Panel */}
				<div id="left-side-panel"
					className="fixed bg-[#fafaf8] box-border bg-transparent z-[4] m-0 p-0 algin-basline border-r border-black sm:border-none h-screen lg:bg-transparent lg:flex md:flex-col py-0 transition duration-200 transform -translate-x-full lg:translate-x-0">
					<div className="w-[225px] h-full flex-1  py-[12px] px-[12px] bg-[#fafaf8] flex flex-col justify-between relative m-0 algin-baseline box-border">
						<div className="m-0 p-0 algin-baseline box-border">
							<div className="relative z-[1] flex item-center box-border bg-transparent mb-[32px] m-0 p-0 align-baseline">
								<h1 className="relative" >
									<span id="notif-1" className="hidden animate-ping absolute right-[-0.5rem] top-2 h-2 w-2 rounded-full bg-gray-500 bg-opacity-75"></span>
									<span id="notif-2" className="hidden absolute right-[-0.5rem] top-2 h-2 w-2 rounded-full bg-gray-500"></span>
									<p className="text-[26px] font-bold" style={{fontFamily : "Beatrice"}}>Shardings</p>

									<div id="notification-panel" className="transition-transform origin-top-left scale-0 w-[350px] absolute top-[25px] left-[140px] flex flex-col items-center justify-center bg-white justify-center shadow-custom-11 z-99 rounded-[8px]">
									</div>
								</h1>

								<div className="grow flex items-center justify-center p-2 lg:hidden">
									<button id="left-side-panel-close-btn" className="focus:outline-none">
										<i className="fas fa-times text-[16px]"></i>
									</button>
								</div>
							</div>
							<a href="#home">
								<button id="home-tab-btn"
									className="flex items-center w-full rounded-[8px] p-[4px] mb-[8px] border-transparent border-[1px]  hover:shadow-[#ccca4f1f_1px_1px_3px] relative hover:bg-[#e5e5da] ">

									<div id="home-tab-btn-logo" size="16" className="mr-[8px] flex m-0 p-0 align-baseline box-border">
										<svg size="16" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.42263 9.17473C1.65902 8.29328 2.22556 7.55452 2.96372 7.0179C5.18213 5.40515 10.092 2 12 2C13.908 2 18.8179 5.40515 21.0363 7.0179C21.7744 7.55452 22.341 8.29328 22.5774 9.17473C22.7888 9.96299 23 11.0007 23 12C23 15.1026 22.8338 17.2532 22.6487 18.6861C22.4455 20.2593 21.2441 21.3821 19.6704 21.5809C18.0065 21.7911 15.478 22 12 22C8.52201 22 5.9935 21.7911 4.32956 21.5809C2.75587 21.3821 1.55454 20.2593 1.35133 18.6861C1.16623 17.2532 1 15.1026 1 12C1 11.0007 1.21124 9.96299 1.42263 9.17473Z"
												fill="#FFFFFF" stroke="#0A0B1E" strokeWidth="1.5px">
											</path>
											<path d="M8.5 21.9236C9.5375 21.9709 10.7027 22 12 22C13.2157 22 14.3154 21.9745 15.3027 21.9323M8.5 21.9236L15.3027 21.9323M8.5 21.9236C8.5 21.9236 8.5 19 8.5 15.5C8.5 12 12 12 12 12C12 12 15.3027 12 15.3027 15.5C15.3027 19 15.3027 21.9323 15.3027 21.9323"
												fill="transparent" stroke="#0A0B1E" strokeWidth="1.5px">
											</path>
										</svg>
									</div>
									<p id="home-tab-btn-txt"
										className="select-none text-[15px] align-[-0.06px] leading-[19.575px] m-0 p-0 align-baseline box-border font-normal">
										Home
									</p>
								</button>
							</a>
							<a href="#rooms">
								<button id="rooms-tab-btn"
									className="flex items-center w-full rounded-[8px] p-[4px] mb-[8px] border-transparent border-[1px]  hover:shadow-[#ccca4f1f_1px_1px_3px] relative hover:bg-[#e5e5da] ">
									<div id="rooms-tab-btn-logo" size="16" className="mr-[8px] flex m-0 p-0 align-baseline box-border">
										<svg size="16" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
											<path d="M23 11.9958C23 9.83482 22.8944 8.29616 22.8048 7.37983C22.7404 6.72054 22.4218 6.12188 21.9 5.71374C21.0962 5.08497 19.6927 4.09202 17.784 3.13769C15.856 2.17369 14.1259 1.48686 13.0827 1.10193C12.4191 0.857036 11.6929 0.883385 11.0442 1.16563C10.137 1.56039 8.66673 2.22475 6.84085 3.13769C4.92474 4.09574 3.32151 5.0927 2.3673 5.72107C1.74941 6.12796 1.33348 6.76614 1.24268 7.50038C1.12792 8.42845 1 9.92692 1 11.9958C1 14.2308 1.14928 15.8001 1.26999 16.7037C1.35048 17.3062 1.6567 17.8472 2.13372 18.224C2.92526 18.8492 4.35518 19.8729 6.31975 20.8552C8.31983 21.8552 10.1064 22.5565 11.1342 22.932C11.7284 23.1491 12.374 23.1491 12.9683 22.9321C13.9964 22.5566 15.7837 21.8553 17.784 20.8552C19.6932 19.9006 21.097 18.9068 21.9007 18.2777C22.422 17.8697 22.7404 17.2713 22.8048 16.6124C22.8944 15.6962 23 14.1573 23 11.9958Z" fill="#FFFFFF" stroke="#0A0B1E" strokeWidth="1.5px" strokeLinecap="round" strokeLinejoin="round"></path>
											<path d="M12.0519 11.9964L12.0519 22.9396" stroke="#0A0B1E" strokeWidth="1.5px" strokeLinecap="round" strokeLinejoin="round"></path>
											<path d="M12.0519 11.9958C12.0519 11.9958 14.1363 10.6416 17.2629 9.07825C20.3895 7.51494 22.4739 6.7854 22.4739 6.7854" stroke="#0A0B1E" strokeWidth="1.5px" strokeLinecap="round" strokeLinejoin="round"></path>
											<path d="M12.0521 11.9958C12.0521 11.9958 9.9674 10.6416 6.84079 9.07825C3.71417 7.51494 1.62976 6.7854 1.62976 6.7854" stroke="#0A0B1E" strokeWidth="1.5px" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
									</div>
									<p id="rooms-tab-btn-txt"
										className="select-none text-[15px] align-[-0.06px] leading-[19.575px] m-0 p-0 align-baseline box-border font-normal">
										Rooms
									</p>
								</button>
							</a>
							<a href="#library" className="hidden">
								<button id="library-tab-btn"
									className="flex items-center w-full rounded-[8px] p-[4px] mb-[8px] border-transparent border-[1px]  hover:shadow-[#ccca4f1f_1px_1px_3px] relative hover:bg-[#e5e5da] ">
									<div id="library-tab-btn-logo" size="16" className="mr-[8px] flex m-0 p-0 align-baseline box-border">
										<svg size="16" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
											<path d="M3.75525 15.3279C3.61417 14.1239 3.5 12.5243 3.5 10.5C3.5 8.47571 3.61417 6.87606 3.75526 5.67208C3.94326 4.0677 5.19818 2.90936 6.83988 2.76285C8.39697 2.62388 10.5987 2.5 13.5 2.5C16.4013 2.5 18.603 2.62388 20.1601 2.76285C21.8018 2.90936 23.0567 4.0677 23.2447 5.67208C23.3858 6.87606 23.5 8.47571 23.5 10.5C23.5 12.5243 23.3858 14.1239 23.2447 15.3279C23.0567 16.9323 21.8018 18.0906 20.1601 18.2372C18.603 18.3761 16.4013 18.5 13.5 18.5C10.5987 18.5 8.39697 18.3761 6.83988 18.2372C5.19818 18.0906 3.94326 16.9323 3.75525 15.3279Z"
												fill="transparent" stroke="#0A0B1E" strokeWidth="1.5px">
											</path>
											<path d="M0.755255 18.3279C0.614171 17.1239 0.5 15.5243 0.5 13.5C0.5 11.4757 0.614171 9.87606 0.755255 8.67208C0.943257 7.0677 2.19818 5.90936 3.83988 5.76285C5.39697 5.62388 7.59868 5.5 10.5 5.5C13.4013 5.5 15.603 5.62388 17.1601 5.76285C18.8018 5.90936 20.0567 7.0677 20.2447 8.67208C20.3858 9.87606 20.5 11.4757 20.5 13.5C20.5 15.5243 20.3858 17.1239 20.2447 18.3279C20.0567 19.9323 18.8018 21.0906 17.1601 21.2372C15.603 21.3761 13.4013 21.5 10.5 21.5C7.59868 21.5 5.39697 21.3761 3.83988 21.2372C2.19818 21.0906 0.943257 19.9323 0.755255 18.3279Z"
												fill="#FFFFFF" stroke="#0A0B1E" strokeWidth="1.5px">
											</path>
										</svg>
									</div>
									<p id="library-tab-btn-txt"
										className="select-none text-[15px] align-[-0.06px] leading-[19.575px] m-0 p-0 align-baseline box-border font-normal">
										Library
									</p>
								</button>
							</a>
							<a href="#recaps">
								<button id="recaps-tab-btn"
									className="flex items-center w-full rounded-[8px] p-[4px] mb-[8px]  border-[1px]  border-transparent relative hover:bg-[#e5e5da]  hover:shadow-[#ccca4f1f_1px_1px_3px] ">
									<div id="recaps-tab-btn-logo" size="16" className="mr-[8px] flex m-0 p-0 align-baseline box-border">
										<svg size="16" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
											<path d="M1 9.05902C1 12.5388 1.20554 15.3192 1.41402 17.2443C1.61786 19.1265 3.00987 20.5856 4.89116 20.7986C6.54327 20.9857 8.8927 21.1538 12 21.1538C15.0523 21.1538 17.3733 20.9916 19.0204 20.8085C20.9474 20.5944 22.3755 19.0815 22.6157 17.1576C22.8135 15.5726 23 13.643 23 12C23 11.11 22.8493 10.0067 22.6649 8.9899C22.3422 7.21096 20.7439 5.99998 18.9359 5.99998H12.4482C11.5124 5.99998 10.6063 5.67193 9.88747 5.0729L9.11253 4.42713C8.39367 3.82809 7.4859 3.50004 6.55017 3.50004L4.71347 3.50003C2.99849 3.50002 1.46883 4.59887 1.21384 6.29479C1.09126 7.11008 1 8.05441 1 9.05902Z"
												fill="#FFFFFF" stroke="#0A0B1E" strokeWidth="1.5px">
											</path>
											<path d="M22.6156 17.1576C22.8135 15.5726 23 13.643 23 12C23 11.91 22.9984 11.8178 22.9955 11.7237C22.9642 10.7298 22.0921 10 21.0977 10H3.02664C1.91366 10 1.01214 10.9108 1.05086 12.0231C1.12466 14.1431 1.2685 15.9005 1.41379 17.2425C1.61758 19.1248 3.00983 20.5856 4.89112 20.7986C6.54323 20.9857 8.89266 21.1538 12 21.1538C15.0522 21.1538 17.3733 20.9916 19.0204 20.8085C20.9473 20.5944 22.3755 19.0815 22.6156 17.1576Z"
												fill="#FFFFFF" stroke="#0A0B1E" strokeWidth="1.5px">
											</path>
										</svg>
									</div>
									<p id="recaps-tab-btn-txt"
										className="select-none text-[15px] align-[-0.06px] leading-[19.575px] m-0 p-0 align-baseline box-border font-normal">
										Recaps
									</p>
								</button>
							</a>
							<a href="#settings">
								<button id="settings-tab-btn"
									className="flex items-center w-full rounded-[8px] p-[4px] mb-[8px]  border-[1px]  border-transparent relative hover:bg-[#e5e5da]  hover:shadow-[#ccca4f1f_1px_1px_3px] ">
									<div id="settings-tab-btn-logo" className="mr-[8px] flex m-0 p-0 align-baseline box-border">
										<svg size="16" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
											<path filerule="evenodd"
												d="M21.6134 13.8391C22.1196 13.8391 22.53 13.4287 22.53 12.9225L22.53 12.0058L22.53 11.0891C22.53 10.5829 22.1196 10.1725 21.6134 10.1725L20.8076 10.1725C20.3795 10.1725 20.0136 9.87419 19.882 9.46682C19.7457 9.04515 19.5764 8.63833 19.3772 8.2494C19.182 7.86837 19.2298 7.39875 19.5325 7.09603L20.1643 6.46422C20.5223 6.10624 20.5223 5.52584 20.1643 5.16786L18.868 3.8715C18.51 3.51352 17.9296 3.51352 17.5716 3.8715L16.9398 4.5033C16.6371 4.80603 16.1675 4.85385 15.7864 4.65865C15.3975 4.4594 14.9907 4.29013 14.569 4.15388C14.1616 4.02225 13.8634 3.65638 13.8634 3.22827L13.8634 2.21666C13.8634 1.71039 13.453 1.29999 12.9467 1.29999L11.1134 1.29999C10.6071 1.29999 10.1967 1.71039 10.1967 2.21665L10.1967 3.22827C10.1967 3.65638 9.89842 4.02225 9.49105 4.15388C9.06938 4.29013 8.66255 4.4594 8.27362 4.65865C7.8926 4.85385 7.42298 4.80603 7.12025 4.5033L6.47472 3.85776C6.11673 3.49978 5.53633 3.49978 5.17835 3.85777L3.88199 5.15413C3.52401 5.51211 3.52401 6.09251 3.88199 6.45049L4.52753 7.09603C4.83025 7.39875 4.87807 7.86837 4.68287 8.2494C4.48363 8.63833 4.31435 9.04515 4.1781 9.46682C4.04647 9.87419 3.6806 10.1725 3.25249 10.1725L2.3583 10.1725C1.85204 10.1725 1.44163 10.5829 1.44163 11.0891L1.44163 12.9225C1.44163 13.4287 1.85204 13.8391 2.3583 13.8391L3.25249 13.8391C3.6806 13.8391 4.04647 14.1374 4.1781 14.5448C4.31435 14.9665 4.48363 15.3733 4.68287 15.7622C4.87807 16.1432 4.83025 16.6129 4.52753 16.9156L3.73268 17.7104C3.3747 18.0684 3.3747 18.6488 3.73268 19.0068L5.02904 20.3032C5.38703 20.6611 5.96743 20.6611 6.32541 20.3032L7.12025 19.5083C7.42298 19.2056 7.8926 19.1578 8.27362 19.353C8.66255 19.5522 9.06938 19.7215 9.49105 19.8577C9.89842 19.9894 10.1967 20.3552 10.1967 20.7833L10.1967 21.7659C10.1967 22.2722 10.6071 22.6826 11.1134 22.6826L12.9467 22.6826C13.453 22.6826 13.8634 22.2722 13.8634 21.7659L13.8634 20.7833C13.8634 20.3552 14.1616 19.9894 14.569 19.8577C14.9907 19.7215 15.3975 19.5522 15.7864 19.353C16.1675 19.1578 16.6371 19.2056 16.9398 19.5083L17.5101 20.0786C17.8681 20.4366 18.4485 20.4366 18.8065 20.0786L20.1028 18.7822C20.4608 18.4243 20.4608 17.8439 20.1028 17.4859L19.5325 16.9156C19.2298 16.6129 19.182 16.1432 19.3772 15.7622C19.5764 15.3733 19.7457 14.9665 19.882 14.5448C20.0136 14.1374 20.3795 13.8391 20.8076 13.8391L21.6134 13.8391ZM8.36336 12.0058C8.36336 14.0308 10.005 15.6725 12.03 15.6725C14.0551 15.6725 15.6967 14.0308 15.6967 12.0058C15.6967 9.98076 14.0551 8.33914 12.03 8.33914C10.005 8.33914 8.36336 9.98076 8.36336 12.0058Z"
												fill="#FFFFFF" stroke="#0A0B1E" strokeWidth="1.5px">
											</path>
										</svg>
									</div>
									<p id="settings-tab-btn-txt"
										className="select-none text-[15px] align-[-0.06px] leading-[19.575px] m-0 p-0 align-baseline box-border font-normal">
										Settings
									</p>
								</button>
							</a>
						</div>

						<div className="m-0 p-0 align-baseline box-border">
							<button className="hidden flex items-center w-full rounded-[8px] p-[4px] mb-[8px]  border-[1px]  border-transparent relative hover:bg-[#e5e5da]  hover:shadow-[#ccca4f1f_1px_1px_3px] ">
								<div className="mr-[8px] flex m-0 p-0 align-baseline box-border">
									<svg size="16" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
										<path d="M11.066 2.97307C11.4474 2.19795 12.5526 2.19795 12.934 2.97307L15.0809 7.33613C15.3839 7.95195 15.971 8.37885 16.6502 8.47729L21.3915 9.16443C22.2491 9.28873 22.5882 10.3453 21.9631 10.9455L18.5491 14.2229C18.0495 14.7025 17.8211 15.3991 17.9398 16.0814L18.771 20.8607C18.9184 21.7082 18.0325 22.3586 17.2681 21.964L12.9626 19.7419C12.3593 19.4304 11.642 19.4328 11.0407 19.7482L6.82329 21.9607C6.06468 22.3586 5.17695 21.721 5.31181 20.875L6.07856 16.0654C6.18595 15.3918 5.95651 14.7083 5.46443 14.2359L2.03694 10.9455C1.41179 10.3453 1.75088 9.28873 2.60851 9.16443L7.3498 8.47729C8.02903 8.37885 8.61611 7.95195 8.91913 7.33613L11.066 2.97307Z"
											fill="#FFFFFF" stroke="#0A0B1E" strokeWidth="1.5px">
										</path>
									</svg>
								</div>
								<p className="select-none text-[15px] align-[-0.06px] leading-[19.575px] m-0 p-0 align-baseline box-border font-normal">
									Getting started
								</p>
							</button>
							<a href="#referrals" className="hidden">
								<button className="flex items-center w-full rounded-[8px] p-[4px] mb-[8px]  border-[1px]  border-transparent relative hover:bg-[#e5e5da]  hover:shadow-[#ccca4f1f_1px_1px_3px] ">
									<div className="mr-[8px] flex m-0 p-0 align-baseline box-border">
										<svg size="16" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M12 7C12 5 9.5 2.5 6.5 2.5C3.5 2.5 1 5 1 8C1 12.7978 8.03364 18.8745 10.8522 21.117C11.5308 21.6569 12.4692 21.6569 13.1478 21.117C15.9664 18.8745 23 12.7978 23 8C23 5 20.5 2.5 17.5 2.5C14.5 2.5 12 5 12 7Z"
												fill="#FFFFFF" stroke="#0A0B1E" strokeWidth="1.5px" strokeMiterlimit="10"
												strokeLinejoin="round">
											</path>
										</svg>
									</div>
									<p id=""
										className="select-none text-[15px] align-[-0.06px] leading-[19.575px] m-0 p-0 align-baseline box-border font-normal">
										Referrals
									</p>
								</button>
							</a>
							<a target="_blank" href="https://workspace.google.com/marketplace/app/shardings/518906264834">
								<button id="google-workspace-btn"
									className="flex items-center w-full rounded-[8px] p-[4px] mb-[8px]  border-[1px]  border-transparent relative hover:bg-[#e5e5da]  hover:shadow-[#ccca4f1f_1px_1px_3px] ">
									<div id="google-workspace-btn-logo" className="mr-[8px] flex m-0 p-0 align-baseline box-border">
										<svg size="16" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="sc-dlfnuX bJgQKs">
											<path d="M22.7649 12.2529C22.7649 11.5052 22.7043 10.7534 22.575 10.0178H12.1997V14.2536H18.1411C17.8946 15.6197 17.1024 16.8282 15.9424 17.5962V20.3446H19.487C21.5686 18.4288 22.7649 15.5995 22.7649 12.2529Z" fill="#4285F4"></path>
											<path d="M12.1995 23.0001C15.1662 23.0001 17.668 22.026 19.4909 20.3446L15.9462 17.5962C14.96 18.2671 13.6869 18.6471 12.2035 18.6471C9.33386 18.6471 6.90071 16.7111 6.02769 14.1082H2.36987V16.9414C4.23718 20.6558 8.04049 23.0001 12.1995 23.0001Z" fill="#34A853"></path>
											<path d="M6.02382 14.1083C5.56305 12.7422 5.56305 11.2629 6.02382 9.89677V7.06348H2.37005C0.809919 10.1716 0.809919 13.8335 2.37005 16.9416L6.02382 14.1083Z" fill="#FBBC04"></path>
											<path d="M12.1995 5.35374C13.7677 5.32949 15.2834 5.91959 16.4191 7.00279L19.5596 3.86232C17.571 1.99502 14.9317 0.968407 12.1995 1.00074C8.04049 1.00074 4.23718 3.34497 2.36987 7.06341L6.02364 9.8967C6.89263 7.28975 9.32982 5.35374 12.1995 5.35374Z" fill="#EA4335"></path>
										</svg>
									</div>
									<p id="google-workspace-btn-txt"
										className="select-none text-[15px] align-[-0.06px] leading-[19.575px] m-0 p-0 align-baseline box-border font-normal">
										Google Workspace
									</p>
								</button>
							</a>
							<a target="_blank" href="/handbook/handbook.html">
								<button id="handbook-btn"
									className="flex items-center w-full rounded-[8px] p-[4px] mb-[8px]  border-[1px]  border-transparent relative hover:bg-[#e5e5da]  hover:shadow-[#ccca4f1f_1px_1px_3px] ">
									<div className="mr-[8px] flex m-0 p-0 align-baseline box-border">
										<svg size="16" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.37539 4.68872C1.58307 2.91566 2.91566 1.58307 4.68872 1.37539C6.34923 1.18088 8.76351 1 12 1C15.2365 1 17.6508 1.18088 19.3113 1.37539C21.0843 1.58307 22.4169 2.91566 22.6246 4.68872C22.8191 6.34923 23 8.76351 23 12C23 15.2365 22.8191 17.6508 22.6246 19.3113C22.4169 21.0843 21.0843 22.4169 19.3113 22.6246C17.6508 22.8191 15.2365 23 12 23C8.76351 23 6.34923 22.8191 4.68872 22.6246C2.91566 22.4169 1.58307 21.0843 1.37539 19.3113C1.18088 17.6508 1 15.2365 1 12C1 8.76351 1.18088 6.34923 1.37539 4.68872Z"
												fill="#FFFFFF" stroke="#0A0B1E" strokeWidth="1.5px">
											</path>
											<path d="M12 18.5 T12 18.5" fill="transparent" stroke="#0A0B1E" strokeWidth="1.875"
												strokeLinecap="round">
											</path>
											<path d="M8.1001 8.9C8.1001 8.9 8.1001 5 12.1001 5C15.4001 5 16.1001 7.8 16.1001 8.9C16.1001 11.1 14.7001 11.8 13.9001 12.5C13.0001 13.3 12.1001 13.8 12.1001 15.3"
												fill="transparent" stroke="#0A0B1E" strokeWidth="1.5px" strokeMiterlimit="10"
												strokeLinecap="round">
											</path>
										</svg>
									</div>
									<p className="select-none text-[15px] align-[-0.06px] leading-[19.575px] m-0 p-0 align-baseline box-border font-normal">
										Help
									</p>
								</button>
							</a>
						</div>
					</div>


					<div className="flex sm:hidden my-[16px] justify-evenly">
						<button id="plan-name-sm" className="mx-4 text-xs font-semibold uppercase bg-[#64FFDB] p-1 rounded"></button>
						<div id="remaining-plan-sm" className="text-xs font-semibold uppercase bg-gray-300 p-1 rounded whitespace-nowrap transition-opacity duration-200 opacity-75 hover:opacity-100"></div>
					</div>
					<div className="hidden py-[16px] px-[20px] mb-[16px] rounded-[4px] border border-black shadow-custom-1 flex">
						<div>
							<img id="left-userphoto" className="w-[20px] h-[20px] rounded-[4px]" alt='left-userphoto'/>
						</div>
						<div className="ml-[15px]">
							<div id="left-username" className="non-italic font-normal text-[14px] leading-[22px] rounded-[4px] mb-[4px]"></div>
							<div id="today-date" className="non-italic font-normal text-[14px] leading-[22px] rounded-[4px]"></div>
						</div>
					</div>
				</div>

				<div className="grow bg-white lg:ml-[225px]">
					<div id="topbar" className="sticky top-0  bg-[#fafaf8] z-[3] flex items-center h-[56px] px-4 sm:px-12 w-full">
						<div className="flex justify-start items-center lg:hidden">
							<button id="left-side-panel-btn" className="pr-4 focus:outline-none">
								<i className="fas fa-bars text-[16px]"></i>
							</button>
							<div className="flex items-center">
								<p className="text-xl sm:text-2xl font-bold" style={{fontFamily: "Beatrice"}}>
									Shardings
								</p>
							</div>
						</div>
						<div className="grow flex items-center justify-end">
							<div id="feedback"
								className="hidden sm:flex relative items-center justify-center flex-row border-[1px] border-[#ceced2] transition-all ease-linear mr-[8px] rounded-[12px] min-w-max text-[#0a0b1e  text-[100%] leading-[1.15] m-0 overflow-visible normal-case cursor-pointer hover:bg-[#f8f8f8]">
							</div>
							<div className="flex flex-col relative">
								<button id="top-logout-btn"
									className="max-w-full bg-white border-0 flex relative items-center justify-center cursor-pointer p-[4px] transition-all duration-200 text-[100%] leading-[1.15] m-0 overflow-visible hover:bg-[#e2dedf] rounded-[4px]">
									<div className="flex max-w-[200px] items-center m-0 p-0 align-baseline box-border">
										<div size="32"
											className="uppercase font-bold text-[12.8px] leading-[21.6px] text-center flex items-center justify-center bg-[#0a0b1e] text-white overflow-hidden relative rounded-[15px] w-[32px] h-[32px] m-0 p-0 align-baseline box-border">
											<img id="top-userphoto" className="w-full h-full object-cover align-middle m-0 p-0" alt='top-userphoto'/>
										</div>
									</div>
								</button>
								<div id="top-logout-menu"
									className="absolute  z-[3] bg-white top-[45px] w-max min-w-[200px] right-0 pt-6 pb-3 hidden transition-transform origin-top-right transform-gpu scale-0 rounded-2xl border border-[#0a0b1e33] shadow-[#0a0b1e1a_2px_2px_7px_0px]">
									<div id="top-username"
										className="non-italic font-normal text-[17px] align-[-0.06px] leading-[21.59px] px-6 rounded-[4px] w-[75px] whitespace-nowrap">
									</div>
									<div className="px-6 h-10   mb-2 flex justify-start items-center space-x-1 border-b border-[#0a0b1e33]">
										<button id="plan-name" className="sm:inline-block text-xs font-semibold  p-1 rounded cursor-default"></button>
										<button id="upgrade-plan" className="text-xs font-semibold  bg-[#0a0b1e] text-white p-1 rounded">Upgrade</button>
										<div id="remaining-plan" className="block w-fit text-xs font-semibold uppercase bg-gray-300 p-1 rounded whitespace-nowrap transition-opacity duration-200 opacity-75 hover:opacity-100"></div>
									</div>
									<a href="#settings">
										<button id="account-settings-btn"
											className="h-10 px-4 flex items-center transition-all duration-200  rounded-[4px] w-full outline-none bg-white hover:bg-[#f6f6f4] cursor-pointer ">
											<div className="h-[16px] w-[16px] mr-[4px] sm:h-[20px] sm:w-[20px] sm:mr-[8px]">
												<svg size="20" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="sc-dlfnuX bJgQKs"><path filerule="evenodd" d="M21.6134 13.8391C22.1196 13.8391 22.53 13.4287 22.53 12.9225L22.53 12.0058L22.53 11.0891C22.53 10.5829 22.1196 10.1725 21.6134 10.1725L20.8076 10.1725C20.3795 10.1725 20.0136 9.87419 19.882 9.46682C19.7457 9.04515 19.5764 8.63833 19.3772 8.2494C19.182 7.86837 19.2298 7.39875 19.5325 7.09603L20.1643 6.46422C20.5223 6.10624 20.5223 5.52584 20.1643 5.16786L18.868 3.8715C18.51 3.51352 17.9296 3.51352 17.5716 3.8715L16.9398 4.5033C16.6371 4.80603 16.1675 4.85385 15.7864 4.65865C15.3975 4.4594 14.9907 4.29013 14.569 4.15388C14.1616 4.02225 13.8634 3.65638 13.8634 3.22827L13.8634 2.21666C13.8634 1.71039 13.453 1.29999 12.9467 1.29999L11.1134 1.29999C10.6071 1.29999 10.1967 1.71039 10.1967 2.21665L10.1967 3.22827C10.1967 3.65638 9.89842 4.02225 9.49105 4.15388C9.06938 4.29013 8.66255 4.4594 8.27362 4.65865C7.8926 4.85385 7.42298 4.80603 7.12025 4.5033L6.47472 3.85776C6.11673 3.49978 5.53633 3.49978 5.17835 3.85777L3.88199 5.15413C3.52401 5.51211 3.52401 6.09251 3.88199 6.45049L4.52753 7.09603C4.83025 7.39875 4.87807 7.86837 4.68287 8.2494C4.48363 8.63833 4.31435 9.04515 4.1781 9.46682C4.04647 9.87419 3.6806 10.1725 3.25249 10.1725L2.3583 10.1725C1.85204 10.1725 1.44163 10.5829 1.44163 11.0891L1.44163 12.9225C1.44163 13.4287 1.85204 13.8391 2.3583 13.8391L3.25249 13.8391C3.6806 13.8391 4.04647 14.1374 4.1781 14.5448C4.31435 14.9665 4.48363 15.3733 4.68287 15.7622C4.87807 16.1432 4.83025 16.6129 4.52753 16.9156L3.73268 17.7104C3.3747 18.0684 3.3747 18.6488 3.73268 19.0068L5.02904 20.3032C5.38703 20.6611 5.96743 20.6611 6.32541 20.3032L7.12025 19.5083C7.42298 19.2056 7.8926 19.1578 8.27362 19.353C8.66255 19.5522 9.06938 19.7215 9.49105 19.8577C9.89842 19.9894 10.1967 20.3552 10.1967 20.7833L10.1967 21.7659C10.1967 22.2722 10.6071 22.6826 11.1134 22.6826L12.9467 22.6826C13.453 22.6826 13.8634 22.2722 13.8634 21.7659L13.8634 20.7833C13.8634 20.3552 14.1616 19.9894 14.569 19.8577C14.9907 19.7215 15.3975 19.5522 15.7864 19.353C16.1675 19.1578 16.6371 19.2056 16.9398 19.5083L17.5101 20.0786C17.8681 20.4366 18.4485 20.4366 18.8065 20.0786L20.1028 18.7822C20.4608 18.4243 20.4608 17.8439 20.1028 17.4859L19.5325 16.9156C19.2298 16.6129 19.182 16.1432 19.3772 15.7622C19.5764 15.3733 19.7457 14.9665 19.882 14.5448C20.0136 14.1374 20.3795 13.8391 20.8076 13.8391L21.6134 13.8391ZM8.36336 12.0058C8.36336 14.0308 10.005 15.6725 12.03 15.6725C14.0551 15.6725 15.6967 14.0308 15.6967 12.0058C15.6967 9.98076 14.0551 8.33914 12.03 8.33914C10.005 8.33914 8.36336 9.98076 8.36336 12.0058Z" fill="#FFFFFF" stroke="#0A0B1E" strokeWidth="1.2px"></path></svg>
											</div>
											<p className="non-italic text-[12px] w-fit sm:text-[16px] leading-[20px] font-light rounded">
												Account settings
											</p>
										</button>
									</a>
									<button id="top-logout-confirm-btn"
										className="h-10 px-4 flex items-center transition-all duration-200  rounded-[4px] w-full focus:outline-none bg-white hover:bg-[#f6f6f4] cursor-pointer ">
										<div className="h-[16px] w-[16px] mr-[4px] sm:h-[20px] sm:w-[20px] sm:mr-[8px]">
											<svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M21 4.65217V3C21 1.89543 20.1046 1 19 1H3C1.89543 1 1 1.89543 1 3V23C1 24.1046 1.89543 25 3 25H19C20.1046 25 21 24.1046 21 23V21.3478"
													stroke="black" strokeWidth="1" strokeLinecap="round"></path>
												<path d="M9 13H25M25 13L20 7.78262M25 13L20 18.2174" stroke="black" strokeWidth="1"
													strokeLinecap="round" strokeLinejoin="round"></path>
											</svg>
										</div>
										<p className="non-italic text-[12px] w-fit sm:text-[16px] leading-[20px] font-light rounded">
											Sign Out
										</p>
									</button>
								</div>
							</div>
						</div>
						<div id="header-overlay" className="absolute z-[1] bg-transparent-full w-full inset-0 hidden cursor-default focus:outline-none"></div>
					</div>
					<div id="pages" className="py-6 px-4 md:px-16">
						<div id="home-page">
							<div id="home-tab" className="hidden"></div>
						</div>
						<div id="rooms-page">
							<div id="rooms-tab" className="hidden">
								<div id="rooms-tab-header"
									className="mb-[28px] flex flex-col sm:flex-row items-start sm:justify-between sm:items-center w-full">
									<div className="w-full mb-4 sm:mb-0 flex items-center justify-center sm:justify-start">
										<div className="mx-2 sm:mx-6 non-italic text-[20px] sm:text-[48px] leading-[40px] font-bold rounded-[4px]">
											Rooms
										</div>
									</div>
									<div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto">
										<button id="top-join-session-btn"
											className="whitespace-nowrap mt-4 mr-2 sm:mt-0 py-[5px] px-[6px] sm:py-[10px] sm:px-[20px] border border-black rounded-[16px] focus:outline-none transition-all duration-200 transform hover:scale-[1.01] hover:shadow-custom-13">
											<div className="flex items-center">
												<div className="w-[20px] h-[20px] mr-2">
													<svg size="16" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"
														className="sc-dlfnuX bJgQKs">
														<path
															d="M5.24986 4.54073C5.43155 2.76482 6.76482 1.43155 8.54073 1.24986C9.86664 1.11421 11.6737 1 14 1C16.3263 1 18.1334 1.11421 19.4593 1.24986C21.2352 1.43155 22.5685 2.76482 22.7501 4.54073C22.8858 5.86664 23 7.67374 23 10C23 12.3263 22.8858 14.1334 22.7501 15.4593C22.5685 17.2352 21.2352 18.5685 19.4593 18.7501C18.1334 18.8858 16.3263 19 14 19C11.6737 19 9.86664 18.8858 8.54073 18.7501C6.76482 18.5685 5.43155 17.2352 5.24986 15.4593C5.11421 14.1334 5 12.3263 5 10C5 7.67374 5.11421 5.86664 5.24986 4.54073Z"
															fill="transparent" stroke="#0A0B1E" strokeWidth="1.5px"></path>
														<path
															d="M5.29778 4.21027C5.27735 4.31854 5.26132 4.42876 5.24986 4.54073C5.11421 5.86663 5 7.67374 5 10C5 12.3263 5.11421 14.1334 5.24986 15.4593C5.43155 17.2352 6.76482 18.5685 8.54073 18.7501C9.86664 18.8858 11.6737 19 14 19C16.3263 19 18.1334 18.8858 19.4593 18.7501C19.5712 18.7387 19.6815 18.7227 19.7897 18.7022C19.7536 19.1089 19.715 19.4794 19.6758 19.8143C19.4964 21.3456 18.3456 22.4964 16.8143 22.6758C15.3802 22.8438 13.2951 23 10.5 23C7.70485 23 5.61979 22.8438 4.18571 22.6758C2.65443 22.4964 1.50356 21.3456 1.3242 19.8143C1.15622 18.3802 1 16.2951 1 13.5C1 10.7049 1.15622 8.61979 1.3242 7.18571C1.50356 5.65443 2.65443 4.50356 4.18571 4.3242C4.52064 4.28496 4.89108 4.24637 5.29778 4.21027Z"
															fill="transparent" stroke="#0A0B1E" strokeWidth="1.5px"></path>
														<path
															d="M10.7573 13.4601L19.2426 4.97477M19.2426 4.97477L13.432 4.82105M19.2426 4.97477L19.3963 10.7853"
															stroke="#0A0B1E" strokeWidth="1.5px" strokeLinecap="round" strokeLinejoin="round">
														</path>
													</svg>
												</div>
												<div className="non-italic text-xs sm:text-[14px] leading-[22px] font-semibold rounded-[4px]">
													Join a session
												</div>
											</div>
										</button>
										<button id="top-new-room-btn"
											className="whitespace-nowrap mt-4 sm:mt-0 bg-[#64FFDB] py-[5px] px-[6px] sm:py-[10px] sm:px-[20px] border border-black rounded-[16px] focus:outline-none transition-all duration-200 transform hover:scale-[1.01] hover:shadow-custom-13">
											<div className="flex items-center">
												<div className="w-[20px] h-[20px] mr-2">
													<svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
														<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
													</svg>
												</div>
												<div className="non-italic text-xs sm:text-[14px] leading-[22px] font-semibold rounded-[4px]">
													New Room
												</div>
											</div>
										</button>
									</div>
								</div>

								<div id="rooms-tab-sub-header"
									className=" flex flex-col sm:flex-row items-center justify-between box-border mb-[24px] bg-transparent ">
									<div className="mx-2 sm:mx-6 flex flex-col sm:flex-row items-center">
										<p className="text-lg font-medium leading-5 ml-2">
											All rooms
										</p>
										<div className="flex p-4">
											<button id="shared-rooms-btn"
												className="relative px-2 py-1 mr-2 rounded-[8px] whitespace-nowrap bg-gray-200 hover:bg-gray-300 text-gray-500 transition ease-in duration-200">
												<span id="shared-rooms-notif-1"
													className="hidden animate-ping absolute right-0 top-1 h-2 w-2 rounded-full bg-gray-500 bg-opacity-75"></span>
												<span id="shared-rooms-notif-2" className="hidden absolute right-0 top-1 h-2 w-2 rounded-full bg-gray-500"></span>
												Shared rooms
											</button>
											<button id="my-rooms-btn"
												className="px-2 py-1 rounded-[8px] whitespace-nowrap hover:bg-gray-300 transition ease-in duration-200 ">
												My rooms
											</button>
										</div>
									</div>
									<div className="mt-2 sm:mt-0 bg-transparent border border-slate-300 hover:border-black rounded-[16px] py-[10px] pl-[13.5px] sm:pr-[14px] flex items-center cursor-text transition ease-in duration-200 "
										>
										<div className="w-[18px] h-[18px] mr-[13.5px]">
											<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M17.5 17.5L23.5 23.5" stroke="black" strokeWidth="1" strokeLinecap="round"></path>
												<circle cx="10.5" cy="10.5" r="9.5" stroke="black" strokeWidth="1"></circle>
											</svg>
										</div>
										<form autoComplete="off">
											<input id="room-search" type="search"
												className="bg-transparent focus:outline-none non-italic text-[14px] leading-[22px] font-normal"
												placeholder="Search" />
										</form>
									</div>
								</div>
								<div id="rooms-container" className="grid sm:grid-cols-[repeat(auto-fit,minmax(510px,1fr))] gap-[20px] hidden">
									<div className="room-preload animate-pulse h-[180px] rounded-[4px] overflow-hidden">
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
									</div>
									<div className="room-preload animate-pulse h-[180px] rounded-[4px] overflow-hidden">
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
									</div>
									<div className="room-preload animate-pulse h-[180px] rounded-[4px] overflow-hidden">
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
									</div>
									<div className="room-preload animate-pulse h-[180px] rounded-[4px] overflow-hidden">
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
									</div>
									<div className="room-preload animate-pulse h-[180px] rounded-[4px] overflow-hidden">
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
									</div>
									<div className="room-preload animate-pulse h-[180px] rounded-[4px] overflow-hidden">
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
									</div>
								</div>
								<div id="shared-rooms-plus-invites-container" className="">
									<div className="room-preload animate-pulse h-[180px] rounded-[4px] overflow-hidden">
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
									</div>
									<div className="room-preload animate-pulse h-[180px] rounded-[4px] overflow-hidden">
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
									</div>
									<div className="room-preload animate-pulse h-[180px] rounded-[4px] overflow-hidden">
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
									</div>
									<div className="room-preload animate-pulse h-[180px] rounded-[4px] overflow-hidden">
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
									</div>
									<div className="room-preload animate-pulse h-[180px] rounded-[4px] overflow-hidden">
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
									</div>
									<div className="room-preload animate-pulse h-[180px] rounded-[4px] overflow-hidden">
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
										<div className="bg-gray-100 h-1/4"></div>
										<div className="bg-gray-300 h-1/4"></div>
									</div>
									<div id="shared-room-invites">
									</div>
									<div id="shared-rooms-divider" className="mt-4 mb-4 border-t border-gray-900">
									</div>
									<div id="shared-rooms">
									</div>
								</div>
							</div>
						</div>
						<div id="library-page">
							<div id="library-tab" className="hidden"></div>
						</div>
						<div id="recaps-page">
							<div id="recaps-tab" className="hidden"></div>
						</div>
						<div id="settings-page">
							<div id="settings-tab" className="hidden">
								<div name="settings-tab-header"
									className="mb-[28px] flex flex-col sm:flex-row items-start sm:justify-between sm:items-center w-full">
									<div className="w-full mb-4 sm:mb-0 flex items-center justify-center sm:justify-start">
										<div className="mx-2 sm:mx-6 non-italic text-[20px] sm:text-[48px] leading-[40px] font-bold rounded-[4px]">
											Settings
										</div>
									</div>
								</div>
								<div className="p-4 sm:p-[32px] bg-white border border-black shadow-custom-1 rounded-md">
									<div className="flex flex-col sm:flex-row justify-start">
										<div className="w-full sm:w-1/2 sm:mr-[20px]">
											<p className="mb-[16px] text-[16px] font-bold">
												User Details
											</p>
											<div className="flex">
												<div
													className="flex justify-center items-center flex-shrink-0 w-[80px] h-[80px] border border-black rounded-md">
													<svg id="upload-profile-photo-spinner"
														className="animate-spin w-[30px] h-[30px] text-black inline absolute hidden"
														xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
														<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
															strokeWidth="4"></circle>
														<path className="opacity-75" fill="currentColor"
															d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
														</path>
													</svg>
													<img id="profile-photo" src="/resources/img/default-profile.png"
														className="rounded-md w-full h-full opacity-100" alt="profile-photo" />
												</div>
												<div className="flex flex-col sm:flex-row">
													<div className="ml-[8px] flex flex-col items-start justify-end">
														<div className="relative duration-200">
															<div
																className="flex items-center mb-[8px] py-[5px] px-[16px] border border-black rounded-[4px] focus:outline-none hover:bg-[#e6e6e6] duration-200">
																<input id="profile-photo-upload-btn" type="file" accept="image/*"
																	className="cursor-pointer opacity-0 w-full h-full absolute left-0" />
																<svg className="w-[20px] jss80 inline" viewBox="0 0 26 26" fill="none"
																	xmlns="http://www.w3.org/2000/svg">
																	<path d="M1 25L25 25" stroke="black" strokeWidth="1"
																		strokeLinecap="round"></path>
																	<path d="M13 19L13 1M13 1L7 7M13 1L19 7" stroke="black" strokeWidth="1"
																		strokeLinecap="round" strokeLinejoin="round"></path>
																</svg>
																<span className="text-[14px] ml-[8px] font-semibold">
																	Upload image
																</span>
															</div>
														</div>
													</div>
													<div className="ml-[8px] flex flex-col items-start justify-end">
														<div className="relative duration-200">
															<button id="change-avatar-btn" className="focus:outline-none">
																<div
																	className="flex items-center mb-[8px] py-[5px] px-[16px] border border-black rounded-[4px] focus:outline-none hover:bg-[#e6e6e6] duration-200">
																	<svg className="h-[20px] w-[20px] inline" viewBox="0 0 26 26" fill="none"
																		xmlns="http://www.w3.org/2000/svg">
																		<circle cx="13" cy="13" r="12" stroke="black" strokeWidth="1"
																			fill="white"></circle>
																		<path
																			d="M13 22C16.735 22 19.8721 19.4405 20.7531 15.9798C21.0257 14.9093 20.1046 14 19 14H7C5.89543 14 4.97435 14.9093 5.24685 15.9798C6.12788 19.4405 9.26504 22 13 22Z"
																			stroke="black" strokeWidth="1" fill="white"></path>
																		<circle cx="9" cy="10" r="1" fill="black"></circle>
																		<circle cx="17" cy="10" r="1" fill="black"></circle>
																		<path
																			d="M12.976 21.9C14.3823 21.9 15.7038 21.5372 16.852 20.9L14.7806 20.0984C13.6195 19.649 12.3325 19.649 11.1714 20.0984L9.1 20.9C10.2483 21.5372 11.5698 21.9 12.976 21.9Z"
																			stroke="black" strokeWidth="1" fill="white"></path>
																	</svg>
																	<span className="text-[14px] ml-[8px] font-semibold">Change Avatar</span>
																</div>
															</button>
														</div>
													</div>
												</div>
											</div>
											<div className="mt-[24px] w-full">
												<p className="mb-[8px]">
													Display name
												</p>
												<form id="display-name-form" className="flex flex-row items-start sm:items-center justify-start">
													<input id="display-name-input"
														className="mb-4 sm:mb-0 px-[16px] max-w-[320px] py-[11px] w-full text-[14px] bg-white hover:bg-[#fafaf9] transition duration-300 border border-black rounded-[4px]"
														disabled placeholder="Display name" type="text" maxLength="25" autoComplete="off"
														value="Name not found" />
													<button id="display-name-edit-btn" type="button"
														className="ml-[8px] px-[15px] py-[12px] border border-black rounded-[4px] focus:outline-none hover:bg-[#e6e6e6] duration-200">
														<svg className="w-[18px]" viewBox="0 0 20 20" fill="none"
															xmlns="http://www.w3.org/2000/svg">
															<path
																d="M14.8424 1.64951C15.3306 1.16135 16.122 1.16135 16.6102 1.64951L18.8199 3.85922C19.3081 4.34737 19.3081 5.13883 18.8199 5.62698L17.4941 6.95281L13.5166 2.97533L14.8424 1.64951Z"
																fill="white"></path>
															<path
																d="M14.1795 2.3125L18.157 6.28998L7.55038 16.8966L2.90999 17.5595L3.5729 12.9191L14.1795 2.3125Z"
																fill="transparent"></path>
															<path filerule="evenodd" clipRule="evenodd"
																d="M15.9473 2.31242L18.157 4.52213C18.279 4.64417 18.279 4.84203 18.157 4.96407L17.4941 5.62698L14.8424 2.97533L15.5053 2.31242C15.6274 2.19038 15.8253 2.19038 15.9473 2.31242ZM14.8424 1.64951C15.3306 1.16135 16.122 1.16135 16.6102 1.64951L18.8199 3.85922C19.3081 4.34737 19.3081 5.13883 18.8199 5.62698L18.157 6.2899L18.157 6.28991L7.55041 16.8965L2.91002 17.5594L3.57293 12.919L13.5166 2.97535L13.5166 2.97533L14.8424 1.64951ZM14.1795 3.63826L16.8312 6.28991L7.10847 16.0126L4.01488 16.4546L4.45682 13.361L14.1795 3.63826Z"
																fill="black"></path>
														</svg>
													</button>
													<div id="display-name-cancel-save-div"
														className="w-full flex justify-around sm:justify-start hidden">
														<div className="sm:mx-[8px]">
															<button id="display-name-cancel-btn" type="button"
																className="px-[16px] py-[12px] text-[14px] font-semibold border border-black rounded-[4px] focus:outline-none hover:bg-[#e6e6e6] duration-300">
																Cancel
															</button>
														</div>
														<div className="mx-[8px] sm:mx-0">
															<button id="display-name-save-btn"
																className="px-[16px] py-[12px] bg-[#64ffdb] text-[14px] font-semibold border border-black rounded-[4px] disabled:opacity-25 transition-all">
																Save
															</button>
														</div>
													</div>
												</form>
											</div>
											<div id="change-password-container" className="w-full mt-4">
											</div>

											<div id="google-signin-display" className="mt-[48px] max-w-[320px]">
												<p className="text-[16px] font-bold">
													Account Details
												</p>
												<div className="relative group flex mt-[16px] p-[12px] w-full justify-center items-center border border-black rounded-[4px] active:outline-none focus:outline-none transform duration-200 hover:-translate-2 hover:scale-[1.01] hover:shadow-custom-1 cursor-default"
													title="">
													<svg className="MuiBox-root jss76 w-[16px] inline" viewBox="0 0 24 24" fill="none"
														xmlns="http://www.w3.org/2000/svg">
														<g clipPath="url(#clip0)">
															<path
																d="M21.5506 12.2238C21.5506 11.5611 21.4968 10.8947 21.3822 10.2427H12.1857V13.9972H17.4521C17.2336 15.2081 16.5314 16.2793 15.5032 16.96V19.3962H18.6451C20.4901 17.698 21.5506 15.1902 21.5506 12.2238Z"
																fill="#4285F4"></path>
															<path
																d="M12.1857 21.7498C14.8153 21.7498 17.033 20.8864 18.6487 19.3961L15.5068 16.9599C14.6326 17.5546 13.5041 17.8914 12.1893 17.8914C9.64566 17.8914 7.48895 16.1753 6.71511 13.8682H3.47287V16.3796C5.12803 19.6719 8.49924 21.7498 12.1857 21.7498Z"
																fill="#34A853"></path>
															<path
																d="M6.71153 13.8683C6.30312 12.6574 6.30312 11.3462 6.71153 10.1353V7.6239H3.47288C2.09 10.3789 2.09 13.6247 3.47288 16.3797L6.71153 13.8683Z"
																fill="#FBBC04"></path>
															<path
																d="M12.1857 6.10849C13.5758 6.08699 14.9192 6.61005 15.9259 7.57018L18.7096 4.78652C16.947 3.13136 14.6075 2.22139 12.1857 2.25005C8.49924 2.25005 5.12803 4.32794 3.47287 7.62392L6.71153 10.1353C7.48178 7.82455 9.64208 6.10849 12.1857 6.10849Z"
																fill="#EA4335"></path>
														</g>
														<defs>
															<clipPath id="clip0">
																<rect width="19.1131" height="19.5" fill="white"
																	transform="translate(2.4375 2.25)"></rect>
															</clipPath>
														</defs>
													</svg>
													<span className="ml-[8px]">
														Signed in using Google
													</span>
													<div id="google-email-display"
														className="hidden group-hover:flex transition-all px-[6px] py-[4px] rounded-md absolute -bottom-12 bg-black text-white text-[14px] text-center">
													</div>
												</div>
											</div>

											<div className="mt-[48px]">
												<p className="text-[16px] font-bold">Email Subscriptions</p>
												<div className="mt-[16px] max-w-[400px]">
													<p className="mb-[16px]">We'll email you the recap after each of your sessions with all the details.</p>
												</div>
												<div className="flex justify-start items-center">
													<p className="mr-[8px]">Send me the recaps</p>
													<input id="email-subscriptions-recap" className="switch_1 flex-shrink-0" type="checkbox" />
												</div>
											</div>

										</div>
										<div id="plan-details" className="w-full sm:w-1/2 sm:ml-[20px]"></div>



									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
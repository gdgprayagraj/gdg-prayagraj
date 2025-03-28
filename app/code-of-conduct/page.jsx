'use client';
import { useState, useEffect } from 'react';
import { submitCodeOfConduct } from '@/actions/code-of-conduct';
import { Button } from '@/components/ui/button';

export default function CodeOfConduct() {
	const [showSuccess, setShowSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showCheckboxAlert, setShowCheckboxAlert] = useState(false);
	const [dbStorageStatus, setDbStorageStatus] = useState(null);

	useEffect(() => {
		// Check if there's a success message in localStorage when component mounts
		const hasSubmitted = localStorage.getItem('formSubmitted');
		if (hasSubmitted === 'true') {
			setShowSuccess(true);
			// Clear the success message after 5 seconds
			const timer = setTimeout(() => {
				setShowSuccess(false);
				localStorage.removeItem('formSubmitted');
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, []);

	// Auto-hide checkbox alert after 3 seconds
	useEffect(() => {
		if (showCheckboxAlert) {
			const timer = setTimeout(() => {
				setShowCheckboxAlert(false);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [showCheckboxAlert]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Check if the checkbox is checked
		const acceptTerms = e.target.acceptTerms.checked;
		if (!acceptTerms) {
			setShowCheckboxAlert(true);
			return;
		}

		setIsSubmitting(true);
		setErrorMessage('');
		setDbStorageStatus(null);

		try {
			const formData = new FormData(e.target);
			const result = await submitCodeOfConduct(formData);

			// Track database storage status
			setDbStorageStatus(result.dbSuccess === true);

			if (result.success) {
				// Set the submission flag
				localStorage.setItem('formSubmitted', 'true');
				setShowSuccess(true);
				e.target.reset();

				// Clear the success message after 5 seconds
				setTimeout(() => {
					setShowSuccess(false);
					localStorage.removeItem('formSubmitted');
				}, 5000);
			} else {
				setErrorMessage(
					result.error || 'An error occurred. Please try again.'
				);
			}
		} catch (error) {
			console.error('Form submission error:', error);
			setErrorMessage(
				'An unexpected error occurred. Please try again later.'
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-white dark:bg-[#0B1120]">
			<main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
				<div className="prose prose-lg dark:prose-invert mx-auto">
					<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
						Code of Conduct
					</h1>

					<p className="text-gray-600 dark:text-gray-300 mb-8">
						When you join GDG prayagraj, you're joining a community.
						And like all growing communities, a couple of ground
						rules about expected behavior are good for everybody.
						These guidelines cover both online (e.g. mailing lists,
						telegram group, virtual meetings) and offline (e.g.
						in-person meetups) behavior. This code of conduct
						applies to all members of this community and all new
						members are informed to make sure they have read it.
					</p>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							1. Core Values
						</h2>
						<ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
							<li>
								<strong>Commitment</strong> - We are required to
								undertake our best to commit to the course of
								the community but fully participating in our
								activities. Join in on discussions, show up for
								in-person/virtual meetings regularly.
							</li>
							<li>
								<strong>Collaboration</strong> - Work together!
								We can learn tons from one another. Share
								knowledge, and help one another out.
							</li>
							<li>
								<strong>Respect</strong> - We are all required
								to respect everyone who is part of this
								community and every other person invited to be a
								part of the community during our activities.
								Remember to be respectful and constructive
								together with your communication to fellow
								members within the telegram group. don't get
								into flame wars, make personal attacks, vent, or
								rant unconstructively. Everyone should take
								responsibility for the community and take the
								initiative to diffuse tension and stop a
								negative discussion as early as possible.
								Property belonging to people like laptops,
								phones, and bags must be respected.
							</li>
							<li>
								<strong>Honesty and Integrity</strong> - We
								expect this to be observed altogether
								dimensions. In addressing others, performing
								tasks, and handling responsibilities during
								every event conducted by GDG prayagraj.
							</li>
							<li>
								<strong>
									Etiquette for virtual discussions
								</strong>{' '}
								- Don't send messages to an enormous list that
								only has to head to one person. Keep off-topic
								conversations to a minimum. Don't be spammy by
								advertising or promoting brands that are
								completely unrelated to the cause of the GDG
								prayagraj Community.
							</li>
							<li>
								<strong>Step down considerately</strong> - If
								you've got some kind of responsibility in your
								community, bear in mind your own constraints. If
								you recognize that a new internship or personal
								situation will limit your time, find someone who
								can take over for you and transfer the relevant
								information (contacts, passwords, etc.) to the
								organiser for a smooth transition.
							</li>
						</ul>
						<p className="mt-4 text-gray-600 dark:text-gray-300 italic">
							Note: TFUG prayagraj is not any kind of profit
							making organization, it's helps students to involve
							in peer to peer learning, to grow together as
							community.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							2. Decision-making
						</h2>
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							We are a community and thus any decision made
							affects the entire community. Let it be made clear
							that anyone within the community can give
							suggestions for decisions and can only be applicable
							if approved by the GDG prayagraj and team of the
							community. It'll be against the code of conduct for
							a decision impacting the entire community to be made
							and implemented without consulting the orgniser.
						</p>
						<p className="text-gray-600 dark:text-gray-300">
							<strong>Transparency</strong> - we commit
							transparency but if organiser said not to be shared
							externally then he means that, so if anyone found
							share any document externally with Ankit as
							organizer prior notice (especially team member of,
							legal action can also be taken because relation team
							has legal holds on that particular document).
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							3. Unacceptable Behavior
						</h2>
						<ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
							<li>
								In-person or online harassment of any kind,
								including but not limited to:
								<ol className="list-decimal pl-6 mt-2 space-y-2">
									<li>
										Sustained disruption of talks or other
										events Offensive verbal language
									</li>
									<li>
										A verbal language that reinforces social
										structures of domination
									</li>
									<li>Physical or cyber threats</li>
								</ol>
							</li>
							<li>
								Any sort of harassment, trolling or bullying
								shall not be tolerated and may result in one
								losing their GDG prayagraj membership.
							</li>
							<li>
								Any disrespect among the general body of the GDG
								prayagraj community or any member of GDG
								prayagraj won't be tolerated.
							</li>
							<li>
								Any kind of immoral activity among the Tfug
								community won't be tolerated and be seriously
								addressed. If a member engages in harassing or
								uncomfortable behavior, the TFUG prayagraj may
								take any action, including warning or expelling
								the member from the community or blocking the
								member from participating online.
							</li>
						</ul>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							4. Reporting
						</h2>
						<p className="text-gray-600 dark:text-gray-300">
							Freedom of expression should be respected in this
							community. One can question, raise any issue or
							report any matter without worrying about
							retaliation. Any incident of unacceptable behavior
							can be mailed directly to the organiser at{' '}
							<a
								href="mailto:info2ankitkumarverma@gmail.com"
								className="text-blue-600 dark:text-blue-400 hover:underline"
							>
								info2ankitkumarverma@gmail.com
							</a>
							. However, all this should be done in a disciplined
							manner.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							5. Conflicts of Interest
						</h2>
						<p className="text-gray-600 dark:text-gray-300">
							We are all urged to endeavor to avoid any
							situation[s] that may produce conflicts of interest.
							Any member is requested to disclose beforehand any
							situation that may cause such an event to the core
							team or organiser in order that a solution could
							also be made at the earliest.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							6. Violation
						</h2>
						<p className="text-gray-600 dark:text-gray-300">
							Violations of this code of conduct may result in
							members being removed from the GDG prayagraj
							community. Use your best judgment, and if you'd like
							more clarity or have questions, feel free to reach
							out at{' '}
							<a
								href="mailto:info2ankitkumarverma@gmail.com"
								className="text-blue-600 dark:text-blue-400 hover:underline"
							>
								info2ankitkumarverma@gmail.com
							</a>
						</p>
						<p className="text-gray-600 dark:text-gray-300 mt-4">
							It is your own obligation to make sure you've got a
							transparent understanding of our code of conduct.
							Any question about this code of conduct can be
							directed to any core member of the team or the
							organiser. Being a member of our community makes you
							subject to the present code of conduct.
						</p>
					</section>

					<section className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
							Dear GDG Prayagraj Community,
						</h2>
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							We want you to know that your safety, privacy, and
							connection with us are our top priorities. We deeply
							appreciate your trust and support as we strive to
							provide a protected and inclusive environment for
							all. Your privacy is highly valued, and we have
							implemented strong measures to ensure the
							confidentiality of your personal information. We are
							committed to fostering diversity and inclusivity
							within our community. Our programs celebrate
							individuals from all backgrounds, ensuring that
							everyone feels valued and respected.
						</p>
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							We are dedicated to delivering the best possible
							experience to you. Your feedback is crucial in
							helping us improve and meet your expectations.
							Please feel free to share your thoughts and
							suggestions with us on{' '}
							<a
								href="mailto:tfugprayagraj@gmail.com"
								className="text-blue-600 dark:text-blue-400 hover:underline"
							>
								tfugprayagraj@gmail.com
							</a>
							. Your safety is paramount. As we navigate these
							challenging times. Whether online or in-person, we
							are committed to providing a safe and secure
							environment for all community members. We are
							grateful for your belief in us and for being a part
							of TFUG Prayagraj. Together, let's continue to
							learn, grow, and thrive.
						</p>
						<p className="text-gray-600 dark:text-gray-300">
							Join us on{' '}
							<a
								href="https://linktr.ee/gdgprayagraj"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 dark:text-blue-400 hover:underline"
							>
								https://linktr.ee/gdgprayagraj
							</a>
						</p>
					</section>

					<section className="mt-12">
						{showSuccess && (
							<div className="mb-6 p-6 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 rounded-lg text-center animate-fade-out">
								<p className="text-xl font-semibold mb-2">
									Thank you!
								</p>
								<p className="text-lg">
									Your form has been submitted successfully.
									We've sent you a confirmation email.
								</p>
								{/* {dbStorageStatus !== null && (
									<p className="text-sm mt-2">
										{dbStorageStatus
											? 'Your information has been securely stored in our database.'
											: 'Note: There was an issue storing your information in our database, but your submission was received.'}
									</p>
								)} */}
							</div>
						)}

						{errorMessage && (
							<div className="mb-6 p-6 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-100 rounded-lg text-center">
								<p className="text-xl font-semibold mb-2">
									Error
								</p>
								<p className="text-lg">{errorMessage}</p>
							</div>
						)}

						{showCheckboxAlert && (
							<div className="mb-6 p-6 bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-100 rounded-lg text-center">
								<p className="text-xl font-semibold mb-2">
									Attention
								</p>
								<p className="text-lg">
									Please accept the Code of Conduct terms
									before submitting the form.
								</p>
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 max-w-2xl mx-auto">
								<div className="flex flex-col items-center">
									<label
										htmlFor="name"
										className="self-start text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
									>
										Name
									</label>
									<input
										type="text"
										name="name"
										id="name"
										required
										className="w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base py-2 px-4"
									/>
								</div>
								<div className="flex flex-col items-center">
									<label
										htmlFor="email"
										className="self-start text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
									>
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										required
										className="w-full rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base py-2 px-4"
									/>
								</div>
							</div>

							<div className="flex items-start mt-6 max-w-2xl mx-auto">
								<div className="flex items-center h-5">
									<input
										id="acceptTerms"
										name="acceptTerms"
										type="checkbox"
										className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
									/>
								</div>
								<div className="ml-3 text-sm">
									<label
										htmlFor="acceptTerms"
										className="font-medium text-gray-700 dark:text-gray-300"
									>
										I have read and accept the Code of
										Conduct, and I agree to comply with its
										guidelines and abide by its terms.
									</label>
								</div>
							</div>

							<div className="flex justify-center mt-6">
								<Button type="submit" disabled={isSubmitting}>
									{isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
								</Button>
							</div>
						</form>
					</section>
				</div>
			</main>
		</div>
	);
}

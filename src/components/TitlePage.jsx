import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";

export default function TitlePage() {
	const [home, setHome] = useState(true);
	const [lang, setLang] = useState(false);
	const [langValue, setLangValue] = useState("");
	const [formD, setFormD] = useState(false);
	const [upload, setUpload] = useState(false);
	const [result, setResult] = useState(false);

	const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [aadharNumber, setAadharNumber] = useState("");
	const [district, setDistrict] = useState("");
	const [crop, setCrop] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", {
			name,
			mobile,
			aadharNumber,
			district,
			crop,
		});
		setFormD(false);
		setUpload(true);
	};

	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setSelectedImage(file);
	};

	const homeClickHandler = () => {
		setHome(false);
		setLang(true);
	};

	const onClickHindi = () => {
		setLang(false);
		setFormD(true);
		setLangValue("hindi");
	};

	const onClickEng = () => {
		setLang(false);
		setFormD(true);
		setLangValue("english");
	};

	const finalSubmitHandler = () => {
		if (selectedImage) {
			alert("Request Submitted Successfully");
			setUpload(false)
			setResult(true)
		} else {
			alert('Please upload image');
		}
	}

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
				backgroundColor: "#c2d6c2",
				fontFamily: "Arial, sans-serif",
			}}
		>
			{/* home section */}
			<div
				onClick={homeClickHandler}
				style={{
					display: home ? "block" : "none",
					padding: "20px",
					cursor: "pointer",
					backgroundColor: "white",
					textAlign: "center",
					borderRadius: "5px",
					boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
					fontSize: "24px",
					fontWeight: "bold",
				}}
			>
				Welcome to Crop disease prediction system
			</div>
			{/* lang section */}
			<div
				style={{
					display: lang ? "block" : "none",
					padding: "20px",
					cursor: "pointer",
					backgroundColor: "white",
					textAlign: "center",
					borderRadius: "5px",
					boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
					fontSize: "24px",
					fontWeight: "bold",
				}}
			>
				Choose Language
				<Stack direction="horizontal" gap={4}>
					<Button onClick={onClickHindi} variant="primary">
						हिंदी
					</Button>
					<Button onClick={onClickEng} variant="success">
						English
					</Button>
				</Stack>
			</div>
			{/* form section */}
			<div
				className="row"
				style={{
					display: formD ? "block" : "none",
					padding: "20px",
					backgroundColor: "white",
					textAlign: "center",
					borderRadius: "10px",
					fontSize: "24px",
					fontWeight: "bold",
				}}
			>
				<div className="col">
					<form onSubmit={handleSubmit}>
						<h1>
							<b>Please fill basic details</b>
						</h1>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="mobile" className="form-label">
								Mobile
							</label>
							<input
								type="tel"
								pattern="[0-9]{10}"
								className="form-control"
								id="mobile"
								value={mobile}
								onChange={(e) => setMobile(e.target.value)}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="aadharNumber" className="form-label">
								Aadhar Number
							</label>
							<input
								type="tel"
								pattern="[0-9]{12}"
								className="form-control"
								id="aadharNumber"
								value={aadharNumber}
								onChange={(e) => setAadharNumber(e.target.value)}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="district" className="form-label">
								District
							</label>
							<select
								className="form-select"
								id="district"
								value={district}
								onChange={(e) => setDistrict(e.target.value)}
								required
							>
								<option value="">Select District</option>
								<option value="district1">District 1</option>
								<option value="district2">District 2</option>
								{/* Add more options for districts */}
							</select>
						</div>
						<div className="mb-3">
							<label htmlFor="crop" className="form-label">
								Crop
							</label>
							<select
								className="form-select"
								id="crop"
								value={crop}
								onChange={(e) => setCrop(e.target.value)}
								required
							>
								<option value="">Select Crop</option>
								<option value="wheat">Wheat</option>
								<option value="rice">Rice</option>
								{/* Add more options for crops */}
							</select>
						</div>
						<button type="submit" className="btn btn-primary">
							Next
						</button>
					</form>
				</div>
			</div>
			{/* upload section */}
			<div
				className="row"
				style={{
					display: upload ? "block" : "none",
					padding: "20px",
					backgroundColor: "white",
					textAlign: "center",
					borderRadius: "10px",
					fontSize: "24px",
					fontWeight: "bold",
				}}
			>
				<div className="col">
					<h1>
						<b>Please upload crop image</b>
					</h1>
					<div className="mb-3">
						<label htmlFor="imageInput" className="form-label">
							Select an Image
						</label>
						<input
							type="file"
							className="form-control"
							id="imageInput"
							accept="image/*"
							onChange={handleImageChange}
						/>
						{selectedImage && (
							<div className="mt-2">
								<p>Selected Image: {selectedImage.name}</p>
								<img height={"300px"} width={"300px"}
									src={URL.createObjectURL(selectedImage)}
									alt="Selected"
									className="img-thumbnail"
								/>
							</div>
						)}
					</div>
					<button onClick={finalSubmitHandler} className="btn btn-primary">
						Submit
					</button>
				</div>
			</div>
			{/* result section */}
			<div
				className="row"
				style={{
					display: result ? "block" : "none",
					padding: "20px",
					backgroundColor: "white",
					textAlign: "center",
					borderRadius: "10px",
					fontSize: "24px",
					fontWeight: "bold",
				}}
			>
				<div className="col">
					<h1>
						<b>Result after evaluating the upload crop image: -</b>
					</h1>
					<button onClick={finalSubmitHandler} className="btn btn-primary">
						Evaluate New Crop
					</button>
				</div>
			</div>
		</div>
	);
}

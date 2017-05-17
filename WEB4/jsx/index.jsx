class Application extends React.Component {
	render() {
    	return (
        	<div className="container">
				<div className="row">
					<div className="bg1 col-xs-6 col-md-4">
						<form className="shape_form" name="form" id="settings-form">
							<select className="form-control" id="shapes">
								<option value="1">Triangle</option>
								<option value="2">Circle</option>
								<option value="3">Rectangle</option>
							</select>
			
							<div className="static_input">
								<input className="form-control" id="color" type="text" placeholder="Color"  />
								<input className="form-control" id="border_color" type="text" placeholder="Border color"  />
								<input className="form-control" id="radius" type="text" placeholder="Radius"  />
								<input className="form-control" id="x1" type="text" placeholder="X1"  />
								<input className="form-control" id="y1" type="text" placeholder="Y1"  />
								<input className="form-control" id="x2" type="text" placeholder="X2"  />
								<input className="form-control" id="y2" type="text" placeholder="Y2"  />
								<input className="form-control" id="x3" type="text" placeholder="X3"  />
								<input className="form-control" id="y3" type="text" placeholder="Y3"  />
							</div>
						</form>
					</div>
					<div className="bg col-xs-12 col-sm-6 col-md-8">
						<canvas height ='500px' width='500px' id='canvasArea'></canvas>
						<div id="info-block"></div>
					</div>
				</div>
			</div>
        )
    }
};

ReactDOM.render(<Application/>, document.getElementById('application_box'));
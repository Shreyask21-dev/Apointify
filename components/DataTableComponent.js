import React, { useEffect } from 'react'
import $ from 'jquery';
import DataTable from 'datatables.net-dt';
// import 'datatables.net-dt/css/jquery.dataTables.css'

export default function DataTableComponent() {


    useEffect(() => {
        
        const addCustomClassToPagingButtons = () => {
            const buttons = document.querySelectorAll('.dt-paging-button');
            buttons.forEach((button) => {
              button.classList.add('btn', 'btn-outline-primary', 'mx-1'); // Add your custom class
            });

            const dataTableRowLayout = document.querySelectorAll('.dt-layout-row')
            dataTableRowLayout.forEach((rows)=>{
                rows.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'my-4')
            })

            const element1 =  document.getElementById('dt-length-1')
            if (element1){
                element1.classList.add('me-3')
            }

            const label = document.querySelector('label[for="dt-search-1"]'); // Select the label by its 'for' attribute
            if (label) { // Check if the label exists
                label.classList.add('me-3', 'd-inline'); // Add your custom classes
            }


            const searchInput = document.getElementById('dt-search-1');
            if (searchInput) {
            searchInput.classList.add('form-control', 'd-inline', 'rounded', 'shadow-sm'); // Add custom classes
            }        
            
        };


        const initializeDataTable = () => {
            // Check if DataTable is already initialized and destroy it
            if ($.fn.dataTable.isDataTable('#myTable')) {
              const table = $('#myTable').DataTable();
              table.destroy(); // Destroy the existing instance
            }
      
            // Initialize DataTable
            const table = new DataTable('#myTable', {
                
                data: [
                    ['John Doe <span class="badge bg-success">New</span>', 'john@example.com', '8530136842', '21-11-2024 <br>12:10 PM', '₹124', '1 hr', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Jane Smith <span class="badge bg-danger">Old</span>', 'jane@example.com', '9762735825', '25-11-2024 <br>4:00 PM', '₹99', '30 min', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Alice Johnson <span class="badge bg-success">New</span>', 'alice@example.com', '9730283864', '27-11-2024 <br>6:30 PM', '₹149', '1.5 hr', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Bob Brown <span class="badge bg-warning">Daily</span>', 'bob@example.com', '9001234567', '01-12-2024 <br>8:45 AM', '₹42', '30 min', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Charlie Davis <span class="badge bg-success">New</span>', 'charlie@example.com', '8776543210', '02-12-2024 <br>9:15 AM', '₹166', '1 hr', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['David Evans <span class="badge bg-danger">Old</span>', 'david@example.com', '9123456789', '03-12-2024 <br>10:30 AM', '₹91', '1 hr', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Eva Miller <span class="badge bg-success">New</span>', 'eva@example.com', '8765432109', '04-12-2024 <br>2:00 PM', '₹133', '1.5 hr', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Frank Wilson <span class="badge bg-warning">Daily</span>', 'frank@example.com', '8005551234', '05-12-2024 <br>3:20 PM', '₹50', '30 min', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Grace Moore <span class="badge bg-success">New</span>', 'grace@example.com', '8812345678', '06-12-2024 <br>5:00 PM', '₹141', '1 hr', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Hannah Taylor <span class="badge bg-danger">Old</span>', 'hannah@example.com', '8567894321', '07-12-2024 <br>7:40 AM', '₹74', '30 min', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Ivy Anderson <span class="badge bg-success">New</span>', 'ivy@example.com', '9345678901', '08-12-2024 <br>11:00 AM', '₹157', '1.5 hr', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Jack Thomas <span class="badge bg-warning">Daily</span>', 'jack@example.com', '9601234789', '09-12-2024 <br>12:30 PM', '₹46', '30 min', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Kim Jackson <span class="badge bg-success">New</span>', 'kim@example.com', '9102387456', '10-12-2024 <br>1:10 PM', '₹154', '1 hr', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Leo White <span class="badge bg-danger">Old</span>', 'leo@example.com', '9098765432', '11-12-2024 <br>4:15 PM', '₹66', '1 hr', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>'],
                    ['Mona Harris <span class="badge bg-success">New</span>', 'mona@example.com', '8701234567', '12-12-2024 <br>6:00 PM', '₹174', '1.5 hr', '<i class="bi bi-person-circle" style="font-size: 1.5em; color: #0d6efd;"></i> <i class="bi bi-camera-video" style="font-size: 1.5em; color: #28a745;"></i>']
                ],                

              columns: [
                { title: 'Name' },
                { title: 'Email' },
                { title: 'Phone' },
                { title: 'Date & Time' },
                { title: 'Payment' },
                { title: 'Slot' },
                { title: 'Action' },

              ]
            });

            addCustomClassToPagingButtons()
      
        }      

        initializeDataTable()
      
        // Delay execution to ensure DataTable is initialized
        // setTimeout(addCustomClassToPagingButtons, 0);
        
    }, []);

    return (
        <div>

            {/* <h1>DataTable Example</h1> */}

            <table id="myTable" className="display table table-striped" style={{ width: '100%' }}></table>

        </div>
    )
}

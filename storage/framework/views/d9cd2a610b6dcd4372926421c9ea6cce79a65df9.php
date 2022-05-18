<?php $__env->startSection('title'); ?> <?php echo e(__('Book Appointment')); ?> <?php $__env->stopSection(); ?>
<?php $__env->startSection('css'); ?>
    <!-- Calender -->
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('assets/libs/fullcalendar/fullcalendar.min.css')); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('assets/libs/select2/select2.min.css')); ?>">
    <link rel="stylesheet" type="text/css"
        href="<?php echo e(URL::asset('assets/libs/bootstrap-datepicker/bootstrap-datepicker.min.css')); ?>">
    <link rel="stylesheet" type="text/css"
        href="<?php echo e(URL::asset('assets/libs/bootstrap-timepicker/bootstrap-timepicker.min.css')); ?>">
    <!-- DataTables -->
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('assets/libs/datatables/datatables.min.css')); ?>">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
<?php $__env->stopSection(); ?>
<?php $__env->startSection('body'); ?>
    <body data-topbar="dark" data-layout="horizontal">
    <?php $__env->stopSection(); ?>
    <?php $__env->startSection('content'); ?>
        <!-- start page title -->
        <?php $__env->startComponent('components.breadcrumb'); ?>
            <?php $__env->slot('title'); ?> Book Appointment <?php $__env->endSlot(); ?>
            <?php $__env->slot('li_1'); ?> Dashboard <?php $__env->endSlot(); ?>
            <?php $__env->slot('li_2'); ?> Booked Appointment <?php $__env->endSlot(); ?>
        <?php echo $__env->renderComponent(); ?>
        <!-- end page title -->
        <div class="row">
            <div class="col-12">
                <a href="<?php echo e(url('/appointment/create')); ?>"
                    class="btn btn-primary text-white waves-effect waves-light mb-4">
                    <i class="mdi mdi-arrow-left  font-size-16 align-middle mr-2"></i> <?php echo e(__('Back')); ?>

                </a>
            </div> <!-- end col -->
        </div> <!-- end row -->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <blockquote><?php echo e(__('Book Appointment')); ?></blockquote>
                        <form action="<?php echo e(url('appointment-store')); ?>" id="" method="POST">
                            <?php echo csrf_field(); ?>
                            <div class="row">
                                    <div class="col-md-8">
                                        <div class="row">
                                            <div class="col-md-8 form-group">
                                                <label class="control-label"><?php echo e(__('Patient Name')); ?><span
                                                        class="text-danger">*</span></label>
                                                <input type="text" class="form-control" name="patient_name" required />
                                                <!--<select class="form-control select2 <?php $__errorArgs = ['appointment_for'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>"
                                                    name="appointment_for" id="patient">
                                                    <option disabled selected><?php echo e(__('Select')); ?></option>
                                                    <?php $__currentLoopData = $patients; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $patient): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <option value="<?php echo e($patient->id); ?>"><?php echo e($patient->first_name); ?>

                                                            <?php echo e($patient->last_name); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </select>
                                                <?php $__errorArgs = ['appointment_for'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong><?php echo e($message); ?></strong>
                                                    </span>
                                                <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>-->
                                            </div>
                                            <div class="col-md-4 form-group">
                                                    <label class="control-label"><?php echo e(__('Sex')); ?><span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <select class="form-control" name="gender">
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                    </select>
                                            </div>
                                            <div class="col-md-3 form-group">
                                                <label class="control-label"><?php echo e(__('Birth date')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="date" class="form-control" name="birthdate" required />
                                            </div>
                                            <div class="col-md-3 form-group">
                                                <label class="control-label"><?php echo e(__('Age')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="number" class="form-control" name="age" required />
                                            </div>
                                            <div class="col-md-3 form-group">
                                                <label class="control-label"><?php echo e(__('RG')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" name="rg" required />
                                            </div>
                                            <div class="col-md-3 form-group">
                                                <label class="control-label"><?php echo e(__('CPF')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" name="cpf" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row">
                                            <div class="col-md-4 form-group">
                                                <label class="control-label"><?php echo e(__('Zip Code')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="number" class="form-control" name="zip_code" required />
                                            </div>
                                            <div class="col-md-8 form-group">
                                                    <label class="control-label"><?php echo e(__('Address')); ?><span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <input type="text" class="form-control" name="address" required />
                                            </div>
                                            <div class="col-md-6 form-group">
                                                <label class="control-label"><?php echo e(__('City')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" name="city" required />
                                            </div>
                                            <div class="col-md-6 form-group">
                                                    <label class="control-label"><?php echo e(__('Phone')); ?><span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <input type="phone" class="form-control" name="phone" required />
                                            </div>
                                            <div class="col-md-6 form-group">
                                                <label class="control-label"><?php echo e(__('Responsible')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" name="responsible" required />
                                            </div>
                                            <div class="col-md-6 form-group">
                                                    <label class="control-label"><?php echo e(__('Email')); ?><span
                                                        class="text-danger">*</span>
                                                    </label>
                                                    <input type="email" class="form-control" name="email" required />
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <hr/>
                            <div class="row">
                                        <div class="col-md-2 form-group">
                                            <label class="control-label"><?php echo e(__('CRM')); ?><span
                                                 class="text-danger">*</span>
                                            </label>
                                            <select class="form-control" name="crm" required onchange="selectdoctor(this.value)">
                                                <option>Please select</option>
                                                <?php $__currentLoopData = $doctors; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $doc): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option value="<?php echo e($doc->id); ?>"><?php echo e($doc->first_name.' '.$doc->last_name); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </select>
                                            <input type="hidden" class="form-control" name="crm1"  />
                                        </div>
                                        <div class="col-md-4 form-group">
                                            <label class="control-label"><?php echo e(__('Requester/Doctor')); ?><span
                                                 class="text-danger">*</span>
                                            </label>
                                            <input type="text" class="form-control" id="doctor_name" name="doctor" required />
                                        </div>
                                        <div class="col-md-2 form-group">
                                            <label class="control-label"><?php echo e(__('Code')); ?><span
                                                 class="text-danger">*</span>
                                            </label>
                                            <input type="text" class="form-control" name="code" required />
                                        </div>
                                        <div class="col-md-2 form-group">
                                            <label class="control-label"><?php echo e(__('Health Insurance')); ?><span
                                                 class="text-danger">*</span>
                                            </label>
                                            <input type="text" class="form-control" name="insurance" required />
                                        </div>
                                        <div class="col-md-2 form-group">
                                            <label class="control-label"><?php echo e(__('Company')); ?><span
                                                 class="text-danger">*</span>
                                            </label>
                                            <input type="text" class="form-control" name="company" required />
                                        </div>
                            </div>
                            <hr/>
                            <div class="table-resposive">
                                <button type="button" onclick="addnewrow()"class="btn btn-primary text-white waves-effect waves-light mb-4">Add New Exam</button>
                                <table class="table" id="serving">
                                    <thead class="">
                                        <tr>
                                            <th>Exam</th>
                                            <th>Exam Description</th>
                                            <th>AMB code</th>
                                            <th>Collection Date</th>
                                            <th>Price (R$)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <tr id="row-<?php echo e($row=1); ?>">
                                            <td width="250">
                                                <input type="hidden" name="exam[1][name]" class="examname" />
                                                <select  name="exam[1][id]" class="form-control examnameselect"  onchange="addexam(<?php echo e($row=1); ?>)">
                                                    <option value="0">Please Select Exam</option>
                                                    <?php $__currentLoopData = $examlist; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $exam): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <option value="<?php echo e($exam->id); ?>"><?php echo e($exam->abbreviation); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </select>
                                            </td>
                                            <td class="examdesc"></td>
                                            <td class="examambcode"></td>
                                            <td class="examdate"></td>
                                            <td>
                                                <input type="text" name="exam[1][price]" class="price" value="" readonly/>
                                            </td>
                                        </td>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-md-8">
                                    
                                    <div class="row">
                                            <div class="col-md-2 form-group">
                                                <label class="control-label"><?php echo e(__('Delivery date')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="date" class="form-control" name="delivery_date" required />
                                            </div>
                                            <div class="col-md-4 form-group">
                                                <label class="control-label"><?php echo e(__('Hour')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="time" class="form-control" name="hour" required />
                                            </div>
                                            <div class="col-md-2 form-group">
                                                <label class="control-label"><?php echo e(__('Fast')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" name="fast" required />
                                            </div>
                                            <div class="col-md-2 form-group">
                                                <label class="control-label"><?php echo e(__('Dum')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" name="dum" required />
                                            </div>
                                    </div>
                                    <div class="row">
                                            <div class="col-md-2 form-group">
                                              <div class="form-check">
                                                <input class="form-check-input" type="checkbox"  name="urgencia" value="1" checked>
                                                <label class="form-check-label">Urgency</label>
                                                </div>
                                            </div>
                                            <div class="col-md-2 form-group">
                                              <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="send_email" value="1" checked>
                                                <label class="form-check-label">send email</label>
                                                </div>
                                            </div>
                                            <div class="col-md-2 form-group">
                                              <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="send_whatsapp" value="1" checked>
                                                <label class="form-check-label">send whatsapp</label>
                                                </div>
                                            </div>
                                    </div>
                                    <div class="row">
                                            <div class="col-md-12 form-group">
                                                <label class="control-label"><?php echo e(__('Diagnosis')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" name="diagnosis" required />
                                            </div>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label"><?php echo e(__('Medicines')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" name="medicines" required />
                                            </div>
                                            <div class="col-md-12 form-group">
                                                <label class="control-label"><?php echo e(__('Comments')); ?><span
                                                    class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" name="comments" required />
                                            </div>
   
                                    </div>
                                </div>
                                <div class="col-md-4 table-responsive">
                                      <input type="hidden" id="sub_total_input" name="sub_total" />
                                      <input type="hidden" id="total_input" name="total" />
                                      <input type="hidden" id="balanace_input" name="balance" />
                                     <table class="table" border="0" cellspacing="0" cellpadding="0">
                                        <tbody>
                                                <tr>
                                                    <td><b>SUBTOTAL</b></td>
                                                    <td class="text-right" id="sub_total">BRL 0.00</td>
                                                </tr>
                                                <tr>
                                                    <td><b>DISCOUNT</b></td>
                                                    <td class="text-right"><input id="tbDesconto" name="discount"  type="text" value="0.00" onchange="countotal()"></td>
                                                </tr>
                                                <tr>
                                                    <td><b style="color:#0083d0;">TOTAL</b></td>
                                                    <td class="text-right" id="f_total">BRL 0.00</td>
                                                </tr>
                                        </tbody>
                                    </table>
                                    <hr>
                                    <table class="table" border="0" cellspacing="0" cellpadding="0">
                                        <tbody>
                                                <tr>
                                                    <td><b>Entrance</b></td>
                                                    <td class="text-right"><input id="entry_amt" name="entrance"  type="text" value="0.00" onchange="countotal()"></td>
                                                </tr>
                                                <tr>
                                                    <td><b style="color:red;">Balance Remaining</b></td>
                                                    <td class="text-right" id="balanace">BRL 0.00</td>
                                                </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-primary">
                                        <?php echo e(__('Create Appointment')); ?>

                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    <?php $__env->stopSection(); ?>
    <?php $__env->startSection('script'); ?>
        <!-- Calender Js-->
        <script src="<?php echo e(URL::asset('assets/libs/jquery-ui/jquery-ui.min.js')); ?>"></script>
        <script src="<?php echo e(URL::asset('assets/libs/moment/moment.js')); ?>"></script>
        <script src="<?php echo e(URL::asset('assets/libs/select2/select2.min.js')); ?>"></script>
        <script src="<?php echo e(URL::asset('assets/libs/bootstrap-datepicker/bootstrap-datepicker.min.js')); ?>"></script>
        <script src="<?php echo e(URL::asset('assets/libs/bootstrap-timepicker/bootstrap-timepicker.js')); ?>"></script>
        <!-- Get App url in Javascript file -->
        <script type="text/javascript">
            var aplist_url ="<?php echo e(url('appointmentList')); ?>";
        </script>
        <!-- Init js-->
        <script src="<?php echo e(URL::asset('assets/js/pages/form-advanced.init.js')); ?>"></script>
        <script src="<?php echo e(URL::asset('assets/js/pages/appointment.js')); ?>"></script>


        <script>
            function selectdoctor(doc){
                console.log(doc);
                $.ajaxSetup({
                  headers: {
                      'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                  }
                });
                jQuery.ajax({
                  url: "<?php echo e(url('/getdoctor/')); ?>",
                  method: 'get',
                  data: {
                     id: doc,
                  },
                  success: function(result){
                     console.log(result.data);
                     jQuery('#doctor_name').val(result.data.first_name+' '+result.data.last_name);
                  }});

                //doctor_name
            }
            var tablerow=2;
            function addnewrow(){
                $.ajaxSetup({
                  headers: {
                      'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                  }
                });
                jQuery.ajax({
                  url: "<?php echo e(url('/gealltexam')); ?>",
                  method: 'get',
                  success: function(result){
                     //console.log(result);
                     let select="<select name='exam["+tablerow+"][id]' class='examnameselect form-control' onchange='addexam("+tablerow+")'>";
                     select +="<option value='0'>Please Select Exam</option>";
                     $.each(result.data, function(index, value) {
                        select +="<option value='"+value.id+"'>"+value.abbreviation+"</option>";
                     });
                     select +="</select>";

                    html  = '<tr id="row-'+ tablerow +'">';
                    html += '<td td width="250"><input type="hidden" name="exam['+tablerow+'][name]" class="examname" />'+select+'</td>';
                    html += '<td class="examdesc"></td>';
                    html += '<td class="examambcode"></td>';
                    html += '<td class="examdate"></td>';
                    html += '<td><input type="text" name="exam['+tablerow+'][price]" class="price"  readonly></td>';
                    html += '</tr>';
                     $('#serving > tbody').append(html);
                  }});

                  tablerow ++;
            }
            function addexam(rowid){
                id=jQuery('#row-'+rowid+' .examnameselect').val();
                console.log(id);
                $.ajaxSetup({
                  headers: {
                      'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
                  }
                });
                jQuery.ajax({
                  url: "<?php echo e(url('/getexambyid')); ?>",
                  method: 'get',
                  data: {
                     id: id,
                  },
                  success: function(result){
                     console.log(result);
                     jQuery('#row-'+rowid+' .examname').val(result.data[0].name);
                     jQuery('#row-'+rowid+' .examdesc').text(result.data[0].name);
                     jQuery('#row-'+rowid+' .examambcode').text(result.data[0].id);
                     jQuery('#row-'+rowid+' .price').val(result.data[0].exam_price);
                     countotal();
                  }});
            }
            function countotal(){
                total=0;
                $('td .price').each(function() {
                    total += parseFloat($(this).val());
                });
                $('#sub_total').text('BRL '+total.toFixed(2));
                $('#sub_total_input').val(total.toFixed(2));
                var dis=$('#tbDesconto').val();
                var ftotal=total -dis;
                $('#f_total').text('BRL '+ ftotal.toFixed(2));
                $('#total_input').val(ftotal.toFixed(2));
                var entry_amt=$('#entry_amt').val();
                var balance=ftotal -entry_amt;
                $('#balanace').text('BRL '+ balance.toFixed(2));
                $('#balanace_total').val(balance.toFixed(2));

                
            }
        </script>
        <script>
         
        </script>
    <?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.master-layouts', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\abhi\freelance\doctorly-master\resources\views/appointment/appointment_create.blade.php ENDPATH**/ ?>
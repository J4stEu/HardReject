<!--Background-->
<section id="back_visible">
	<div class="left_visible">
		<div class="visible_image left_visible_1"></div>
		<div class="visible_image left_visible_2"></div>
		<div class="visible_image left_visible_3"></div>
		<div class="visible_image left_visible_4"></div>
		<div class="visible_image left_visible_5"></div>
	</div>
	<div class="right_visible"></div>
</section>

<!--Main menu-->
<section id="workspace_menu">
	<nav class="ws_menu">
		<div id='nav_pos_1' class="nav_pos"><p>Проекты</p><div class="description"> В данном разделе находятся активные проекты</div></div>
		<div id='nav_pos_2' class="nav_pos"><p>Таски</p><div class="description">В данном разделе находятся активные задачи</div></div>
		<div id='nav_pos_3' class="nav_pos"><p>Ход выполнения</p><div class="description">Здесь вы сможете отследить ход выполнения проекта</div></div>
		<div id='nav_pos_4' class="nav_pos"><p>Рабочий прототип</p><div class="description">Здесь вы найдете рабочий прототип проекта</div></div>
	</nav>
	<div class="ws_back_mode"><i class="im im-data"></i></div>
	<div class="change_sphere"><i class="im im-external-link"></i></div>
	<div class="log_out"><i class="im im-sign-out"></i></div>
</section>

<!--Project section-->
<section id="projects">
	<div class="projects_wrapper">
		<?php 
			$projects = R::getAll('SELECT * FROM projects WHERE user_id = '.$_SESSION["logged_user"]['id']);
			for ($i = 0; $i < count($projects); $i++) {
				$count_team = R::getAll('SELECT * FROM team WHERE project_id = '.$projects[$i]['id']);
		?>
				<div class="my_project">
					<div id="my_project_<?php echo $projects[$i]['id'] ?>" class="project_type">
						<?php
							if ($_SESSION['logged_user']['ws_project'] === $projects[$i]['id']) echo '<i class="im im-check-mark-circle-o" style="color: #66E275"></i>';
							else echo '<i class="im im-x-mark-circle-o" style="color: #FF4A40"></i>';
						?>
					</div>
					<p class="project_title"><?php echo $projects[$i]['name'] ?></p>
					<p class="team_count"><?php echo 'Команда(чел):'.count($count_team) ?></p>
					<?php
						if ($_SESSION['logged_user']['ws_project'] === $projects[$i]['id']) echo '<p class="project_alert">Проект активен сейчас!</p>';
						else echo '<p class="project_de_alert">Проект в режиме ожидания!</p>';
					?>
				</div>
		<?php 
			}
		?>
		<div class="my_project">
			<div class="add_pr"><i class="im im-plus-circle"></i></div>
		</div>
	</div>
</section>

<!--Task section-->
<section id="tasks">
	<div class="tasks_wrapper">
		<?php 
			$second_connection =  R::selectDatabase('DB1');
			$tasks = R::getAll('SELECT * FROM tasks WHERE project_id = '.$_SESSION['logged_user']['ws_project']);
			$second_connection = R::selectDatabase('default');
			for ($i = 0; $i < count($tasks); $i++) { 
				$task_user = R::findOne('users', 'id=?', [$tasks[$i]['team_user_id']])
			?>
				<div class="my_task">
					<p class="task_title"><?php echo 'Таск №'.($i + 1) ?></p>
					<p class="ms_task"><?php echo $tasks[$i]['ms'] ?></p>
					<p class="user_to_do">Таск привязан за: <?php echo preg_replace('~^(\S++)\s++(\S)\S++\s++(\S)\S++$~u', '$1 $2.$3.', $task_user['fio']) ?></p>
				</div>
		<?php 
			}
		?>
		<div class="my_task">
			<div class="add_task"><i class="im im-plus-circle"></i></div>
		</div>
	</div>
</section>

<!--Result section-->
<section id="results">
	<div class="results_wrapper">
	<?php 
		$second_connection =  R::selectDatabase('DB1');
		$tasks = R::getAll('SELECT * FROM tasks WHERE project_id = '.$_SESSION['logged_user']['ws_project']);
	?>
		<div id="s1" class="<?php for ($i = 0; $i < count($tasks); $i++) {echo 's'.($i+2).' ';}?> main"></div>
		<div class="flexible_cont">
			<div class="left_pr pr_cont">
				<?php 
					$done_count = 0;
					for ($i = 0; $i < count($tasks); $i++) {
						$done_task = R::findOne('done', 'task_id=?', [$tasks[$i]['id']]);
					?>
						<div id="s<?php echo ($i+2)?>" class="pr pr_<?php echo ($i+1)?>">
							<?php 
								echo '<p class="result_name">Таск №'.$i.'</p>';
								if ($done_task and $done_task['confirmation']) {
									$done_count++;
									echo '<script type="text/javascript"> var completed_tasks = []; completed_tasks.push('.($i+1).');</script>';
									echo '<a href="'.$done_task['complete_file'].'" download style="color: #66E275">Завершен(ссылка на отчет)</a>';
								} else echo '<a href="#" style="color: #FF4A40">Не завершен</a>';
							?>
						</div>
				<?php 
					}
					$second_connection = R::selectDatabase('default');
				?>
			</div>
		</div>
		<div class="pers">
			<p class="pers_title">Процент выполнения: <?php echo ($done_count / count($tasks) * 100).'%'?></p>
		</div>
	</div>
</section>

<!--Example section-->
<section id="example">
	<div class="example_wrapper">
		<div><p class="roles">Роли команды над проектом:</p></div>
		<?php
			if ($_SESSION['logged_user']['ws_project']){
				$project = R::findOne('projects', 'id=?', [$_SESSION['logged_user']['ws_project']]);
				$team_lead = R::findOne('users', 'id=?', [$project['user_id']]);
			}
		?>
			<div><p class="example_name"><?php echo preg_replace('~^(\S++)\s++(\S)\S++\s++(\S)\S++$~u', '$1 $2.$3.', $team_lead['fio'])?><span>; TeamLead</span></p></div>
		<?php
			$team= R::getAll('SELECT * FROM team WHERE project_id = '.$_SESSION['logged_user']['ws_project']);
			for ($i = 0; $i < count($team); $i++) {
				$team_user = R::findOne('users', 'id=?', [$team[$i]['user_id']]);
		?>
				<div><p class="example_name"><?php echo preg_replace('~^(\S++)\s++(\S)\S++\s++(\S)\S++$~u', '$1 $2.$3.', $team_user['fio']);?><span>; <?php echo $team[$i]['role'];?></span></p></div>
		<?php
			}
		?>
		<div class="file"><a href="<?php echo $project['example']?>" download>ФАЙЛ ПРОТОТИП ПРОЕКТА</a></div>
	</div>
</section>